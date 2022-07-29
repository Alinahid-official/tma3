let isStart = false;
let numImages = 0;  //used to track number of images loaded 
let curImageIndex = 0;  //the images index we are currently using
let mainInterval;  //the interval for the slideshow

let order = "sequential";  //the current ordering chosen by user

let slideIncr = 0;
let sidebarVisible = false;
let isPaused = false;
let imgs
let orderIndices = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
// let orderIndices = [1,0,2,];

let direction = 0; // 0 is forward 1 is reverse

$(document).ready(function(){
    function start(){
         mainInterval =setInterval(function(){
            if(direction==0){
                next()
            }else{
                prev()
            }
            
        },2000)
    }
    imgs =$('img')
    function setFirstImage(){
        // for(i in imgs){
        //     console.log(imgs[i])
        // }
        imgs[orderIndices[curImageIndex]].style.display='block'
    }

    function next(){
        console.log(orderIndices[curImageIndex])
        if(curImageIndex==orderIndices.length-1){
            direction=1
        }else{
            imgs[orderIndices[curImageIndex]].style.display='none'
            imgs[orderIndices[curImageIndex+1]].style.display='block'
            curImageIndex+=1
        }

    }
    
    function prev(){
        if(curImageIndex==0){
            direction=0
        }else{
            imgs[orderIndices[curImageIndex]].style.display='none'
            imgs[orderIndices[curImageIndex-1]].style.display='block'
            curImageIndex-=1
        }
    }
    function pause(){
        clearInterval(mainInterval)
    }

    function shuffleIndices() {
        orderIndices = orderIndices.sort((a, b) => 0.5 - Math.random());
    }


    function  toggleText(){
        if(order=='sequential'){
            $("#toggle").text('Seqential')
        }else{
            $("#toggle").text('Random')
        }
    }
    
    $("#play").click(function(){
        start()
    })
    $("#pause").click(function(){
        pause()
    })
    $("#toggle").click(function(){
        if(order=='sequential'){
            order ='random'
            $("#forward").hide()
            $("#backward").hide()
            toggleText()
            imgs[orderIndices[curImageIndex]].style.display='none'
            shuffleIndices()
            imgs[orderIndices[curImageIndex]].style.display='block'
            console.log(orderIndices)
            
        }else{
            
            order ='sequential'
            $("#forward").show()
            $("#backward").show()
            toggleText()
            imgs[orderIndices[curImageIndex]].style.display='none'
            orderIndices = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
            imgs[orderIndices[curImageIndex]].style.display='block'
        }
        
    })
    toggleText()
    $("#forward").click(function(){
        direction=0
    })
    $("#backward").click(function(){
        direction=1
    })
    setFirstImage()
})