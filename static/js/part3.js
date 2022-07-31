window.onload = function(){
    setPrice()
    document.getElementById("changeCpu").addEventListener('click',function(){
        document.getElementById("blur").style.display='block'
        document.getElementById("cpuList").style.display='block'

    })
    document.getElementById("changeRam").addEventListener('click',function(){
        document.getElementById("blur").style.display='block'
        document.getElementById("ramList").style.display='block'

    })
    document.getElementById("changeMonitor").addEventListener('click',function(){
        document.getElementById("blur").style.display='block'
        document.getElementById("displayList").style.display='block'

    })
    document.getElementById("changeHardDisk").addEventListener('click',function(){
        document.getElementById("blur").style.display='block'
        document.getElementById("hardDiskList").style.display='block'

    })
    document.getElementById("changeSound").addEventListener('click',function(){
        document.getElementById("blur").style.display='block'
        document.getElementById("soundList").style.display='block'

    })
    document.getElementById("closeBtn").addEventListener('click',function(){
        document.getElementById("blur").style.display='none'
        document.getElementById("soundList").style.display='none'
        document.getElementById("cpuList").style.display='none'
        document.getElementById("ramList").style.display='none'
        document.getElementById("displayList").style.display='none'
        document.getElementById("hardDiskList").style.display='none'
    })

    let selectCpuBtns = document.getElementsByClassName("selectCpuBtn");
    for (i of selectCpuBtns) {
        i.addEventListener('click', function(e) {
            var ele = e.target;
            var parent = ele.parentElement
            var price = parent.getElementsByTagName("input")[0].value
            console.log(price)
            var text = parent.getElementsByClassName("text")[0].innerText
            console.log(text)
            document.getElementById("cpu").value=price
            document.getElementById("cpuText").innerText= text
            document.getElementById("blur").style='none'
            document.getElementById("cpuList").style='none'
            setPrice()
        });
    }
    let selectRamBtns = document.getElementsByClassName("selectRamBtn");
    for (i of selectRamBtns) {
        i.addEventListener('click', function(e) {
            var ele = e.target;
            var parent = ele.parentElement
            var price = parent.getElementsByTagName("input")[0].value
            console.log(price)
            var text = parent.getElementsByClassName("text")[0].innerText
            console.log(text)
            document.getElementById("ram").value=price
            document.getElementById("ramText").innerText=text
            document.getElementById("blur").style='none'
            document.getElementById("ramList").style='none'
            setPrice()
        });
    }
    let selectdisplayBtns = document.getElementsByClassName("selectDisplayBtn");
    for (i of selectdisplayBtns) {
        i.addEventListener('click', function(e) {
            var ele = e.target;
            var parent = ele.parentElement
            var price = parent.getElementsByTagName("input")[0].value
            console.log(price)
            var text = parent.getElementsByClassName("text")[0].innerText
            console.log(text)
            document.getElementById("monitor").value=price
            document.getElementById("monitorText").innerText=text
            document.getElementById("blur").style='none'
            document.getElementById("displayList").style='none'
            setPrice()
        });
    }
    let selectHardDiskBtns = document.getElementsByClassName("selectHardDiskBtn");
    for (i of selectHardDiskBtns) {
        i.addEventListener('click', function(e) {
            var ele = e.target;
            var parent = ele.parentElement
            var price = parent.getElementsByTagName("input")[0].value
            console.log(price)
            var text = parent.getElementsByClassName("text")[0].innerText
            console.log(text)
            document.getElementById("hardDisk").value=price
            document.getElementById("hardDiskText").innerText=text
            document.getElementById("blur").style='none'
            document.getElementById("hardDiskList").style='none'
            setPrice()
        });
    }
    let selectSoundBtns = document.getElementsByClassName("selectSoundBtn");
    for (i of selectSoundBtns) {
        i.addEventListener('click', function(e) {
            var ele = e.target;
            var parent = ele.parentElement
            var price = parent.getElementsByTagName("input")[0].value
            console.log(price)
            var text = parent.getElementsByClassName("text")[0].innerText
            console.log(text)
            document.getElementById("sound").value=price
            document.getElementById("soundText").innerText=text
            document.getElementById("blur").style='none'
            document.getElementById("soundList").style='none'
            setPrice()
        });
    }
    document.getElementById("addToCart").addEventListener('click',function(){
        let cart
        if(window.localStorage.cart){
             cart = JSON.parse(localStorage.getItem('cart'))
            
        }
        else{
            cart =[]
        }
        var name = document.getElementById("name").innerText
        let computer = {
            'name' : name,
            'cpu' : document.getElementById("cpuText").innerText,
            'ram' : document.getElementById("ramText").innerText,
            'display' : document.getElementById("monitorText").innerText,
            'hardDisk' : document.getElementById("hardDiskText").innerText,
            'soundText' : document.getElementById("soundText").innerText,
            'price' : document.getElementById("price").innerText
        }
        cart.push(computer)
        localStorage.setItem('cart',JSON.stringify(cart))
        console.log(cart)
        setCart()
    })
    setCart()
}

function setCart(){
    var cart = JSON.parse(window.localStorage.getItem('cart'))
    if(cart){
        document.getElementById("cart").innerText=`cart(${cart.length})`
    }
    else{
        document.getElementById("cart").innerText=`cart`
    }
    
}
function setPrice(){
    var cpu =document.getElementById("cpu").value
    var ram =document.getElementById("ram").value
    var monitor=document.getElementById("monitor").value
    var hard_disk=document.getElementById("hardDisk").value
    var sound=document.getElementById("sound").value
    var total= parseInt(cpu)+parseInt(ram)+parseInt(monitor)+parseInt(hard_disk)+parseInt(sound)
    document.getElementById("price").innerText=total
    // $("#price").text(total)
}

// $(document).ready(function(){
//     // let total
//     $("#addToCart").click(function(){
//         var price = $("#price").text()
//         var name = $("#name").val()
//         $.ajax({
//             url: "/part3/cart/",
//             type:"post",
            
//             data : {
//                     name : name,
//                     price : price
//                 },
//             success: function(data){
//                 console.log(data)
//             }
//         })
//         // location.replace('/part/cart')
  
//     })
//     setPrice()
//     $("#changeCpu").click(function(){
//         $('#blur').show();
//         $("#cpuList").show();
//     })
//     $("#changeRam").click(function(){
//         $('#blur').show();
//         $("#ramList").show();
//     })
//     $("#closeBtn").click(function(){
//         $('#blur').hide();
//         $("#ramList").hide();
//         $("#cpuList").hide();
//     })
//     $("#selectP1").click(function(){
//         var newCpu = $("#p1").val();
//         $("#cpu").val(newCpu)
//         var newText = $("#p1Text").text()
//         $("#cpuText").text(newText);
//         $("#blur").hide()
//         $("#cpuList").hide()
//         setPrice()
//     })
//     $("#selectRam1").click(function(){
//         var newRam = $("#ram1").val();
//         $("#ram").val(newRam)
//         var newText = $("#ram1Text").text()
//         $("#ramText").text(newText)
//         $("#blur").hide()
//         $("#ramList").hide();
//         setPrice()
//     })
//   });

// function setPrice(){
//     var cpu =$("#cpu").val()
//     var ram =$("#ram").val()
//     var monitor=$("#monitor").val()
//     var hard_disk=$("#hardDisk").val()
//     var sound=$("#sound").val()
//     var total= parseInt(cpu)+parseInt(ram)+parseInt(monitor)+parseInt(hard_disk)+parseInt(sound)
//     $("#price").text(total)
// }