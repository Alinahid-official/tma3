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
window.onload = function(){
    checkBtn()
    imgs = document.getElementsByClassName('pic')
    setFirstImage()
    toggleText()
    document.getElementById("play").addEventListener('click',function(){

        start()
    })
    document.getElementById("pause").addEventListener('click',function(){
        pause()
    })
    document.getElementById("forward").addEventListener('click', function(){
        direction=0
    })
    document.getElementById("prev").addEventListener('click', function(){
        // if(curImageIndex-1==0){
        //     document.getElementById("prev").setAttribute('disabled',true)
        //     prev()
        // }else{
        //     document.getElementById("next").setAttribute('disabled',false)
        //     prev()
        // }
        prev()
        checkBtn()
    })
    document.getElementById("next").addEventListener('click', function(){
        // if(curImageIndex+1==19){
        //     document.getElementById("next").setAttribute('disabled',true)
        //     next()
            
        // }else{
        //     document.getElementById("prev").setAttribute('disabled',false)
        //     next()
        // }
        next()
        checkBtn()
    })
    document.getElementById("backward").addEventListener('click', function(){
        direction=1
    })
    document.getElementById("toggle").addEventListener('click',function(){
        if(order=='sequential'){
                        order ='random'
                        // $("#forward").hide()
                        // $("#backward").hide()
                        document.getElementById("forward").style.display='none'
                        document.getElementById("backward").style.display='none'
                        document.getElementById("prev").style.display='none'
                        document.getElementById("next").style.display='none'
                        toggleText()
                        imgs[orderIndices[curImageIndex]].style.display='none'
                        shuffleIndices()
                        imgs[orderIndices[curImageIndex]].style.display='block'
                        console.log(orderIndices)
                        checkBtn()
                    }else{
            
                        order ='sequential'
                        document.getElementById("forward").style.display='block'
                        document.getElementById("backward").style.display='block'
                        document.getElementById("prev").style.display='block'
                        document.getElementById("next").style.display='block'
                        toggleText()
                        imgs[orderIndices[curImageIndex]].style.display='none'
                        orderIndices = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
                        imgs[orderIndices[curImageIndex]].style.display='block'
                        checkBtn()
                        }
    })
    
}
function start(){
        mainInterval =setInterval(function(){
        if(direction==0){
            next()
            checkBtn()
        }else{
            prev()
            checkBtn()
        }
        
    },2000)
        }
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
        document.getElementById('toggle').innerText='sequential'
    }else{
        document.getElementById('toggle').innerText='random'
    }
}

function checkBtn(){
    if(curImageIndex===0){
        // console.log('zero',curImageIndex)
        document.getElementById("prev").setAttribute('disabled',true)
        return
    }
    if(curImageIndex===19){
        // console.log('none',curImageIndex)   /
        document.getElementById("next").setAttribute('disabled',true)
        return
    }
    else{
        console.log('remove',curImageIndex)   
        document.getElementById("prev").removeAttribute('disabled')
        document.getElementById("next").removeAttribute('disabled')
    }
}
// $(document).ready(function(){
//     function start(){
//          mainInterval =setInterval(function(){
//             if(direction==0){
//                 next()
//             }else{
//                 prev()
//             }
            
//         },2000)
//     }
//     imgs =$('img')
//     function setFirstImage(){
//         // for(i in imgs){
//         //     console.log(imgs[i])
//         // }
//         imgs[orderIndices[curImageIndex]].style.display='block'
//     }

//     function next(){
//         console.log(orderIndices[curImageIndex])
//         if(curImageIndex==orderIndices.length-1){
//             direction=1
//         }else{
//             imgs[orderIndices[curImageIndex]].style.display='none'
//             imgs[orderIndices[curImageIndex+1]].style.display='block'
//             curImageIndex+=1
//         }

//     }
    
//     function prev(){
//         if(curImageIndex==0){
//             direction=0
//         }else{
//             imgs[orderIndices[curImageIndex]].style.display='none'
//             imgs[orderIndices[curImageIndex-1]].style.display='block'
//             curImageIndex-=1
//         }
//     }
//     function pause(){
//         clearInterval(mainInterval)
//     }

//     function shuffleIndices() {
//         orderIndices = orderIndices.sort((a, b) => 0.5 - Math.random());
//     }


//     function  toggleText(){
//         if(order=='sequential'){
//             $("#toggle").text('Seqential')
//         }else{
//             $("#toggle").text('Random')
//         }
//     }
    
//     $("#play").click(function(){
//         start()
//     })
//     $("#pause").click(function(){
//         pause()
//     })
//     $("#toggle").click(function(){
//         if(order=='sequential'){
//             order ='random'
//             $("#forward").hide()
//             $("#backward").hide()
//             toggleText()
//             imgs[orderIndices[curImageIndex]].style.display='none'
//             shuffleIndices()
//             imgs[orderIndices[curImageIndex]].style.display='block'
//             console.log(orderIndices)
            
//         }else{
            
//             order ='sequential'
//             $("#forward").show()
//             $("#backward").show()
//             toggleText()
//             imgs[orderIndices[curImageIndex]].style.display='none'
//             orderIndices = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
//             imgs[orderIndices[curImageIndex]].style.display='block'
//         }
        
//     })
//     toggleText()
//     $("#forward").click(function(){
//         direction=0
//     })
//     $("#backward").click(function(){
//         direction=1
//     })
//     setFirstImage()
// })