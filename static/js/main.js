window.addEventListener('load',function(){
    setPrice()
    setCart()
    document.getElementById("addToCart").addEventListener('click',function(){
        addToCart()
        location.reload()
    })
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
            var price = parent.getElementsByClassName("price")[0].value
            var id = parent.getElementsByClassName("id")[0].value
            console.log(price)
            var text = parent.getElementsByClassName("text")[0].innerText
            console.log(text)
            document.getElementById("cpuId").value=id
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
            var price = parent.getElementsByClassName("price")[0].value
            var id = parent.getElementsByClassName("id")[0].value
            console.log(price)
            var text = parent.getElementsByClassName("text")[0].innerText
            console.log(text)
            document.getElementById("ramId").value=id
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
            var price = parent.getElementsByClassName("price")[0].value
            var id = parent.getElementsByClassName("id")[0].value
            console.log(price)
            var text = parent.getElementsByClassName("text")[0].innerText
            console.log(text)
            document.getElementById("monitorId").value=id
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
            var price = parent.getElementsByClassName("price")[0].value
            var id = parent.getElementsByClassName("id")[0].value
            console.log(price)
            var text = parent.getElementsByClassName("text")[0].innerText
            console.log(text)
            document.getElementById("hardDiskId").value=id
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
            var price = parent.getElementsByClassName("price")[0].value
            var id = parent.getElementsByClassName("id")[0].value
            console.log(price)
            var text = parent.getElementsByClassName("text")[0].innerText
            console.log(text)
            document.getElementById("soundId").value=id
            document.getElementById("sound").value=price
            document.getElementById("soundText").innerText=text
            document.getElementById("blur").style='none'
            document.getElementById("soundList").style='none'
            setPrice()
        });
    }



})

function setPrice(){
    var cpu =document.getElementById("cpu").value
    var ram =document.getElementById("ram").value
    var monitor=document.getElementById("monitor").value
    var hard_disk=document.getElementById("hardDisk").value
    var sound=document.getElementById("sound").value
    var total= parseInt(cpu)+parseInt(ram)+parseInt(monitor)+parseInt(hard_disk)+parseInt(sound)
    document.getElementById("price").innerText=total
}


function addToCart(){
    var name = document.getElementById("name").innerText
    var cpu = document.getElementById("cpuId").value
    var ram = document.getElementById("ramId").value
    var monitor = document.getElementById("monitorId").value
    var hard_disk = document.getElementById("hardDiskId").value
    var sound = document.getElementById("soundId").value
    var price = document.getElementById("price").innerText
    console.log(name,cpu,ram,monitor,hard_disk,sound,price)
    var user =document.getElementById('user')
    // console.log(user)
    if(!user){
        location.href='/part4/login'
        return
    }
    $.ajax({
        url: "/part4/cart/",
        type:"post",
        
        data : {cpu:cpu,
                ram:ram,
                monitor:monitor,
                hard_disk:hard_disk,
                sound:sound,
                name : name,
                price : price
            },
        success: function(data){
            console.log(data)
            // location.reload
        }
    })
    
}

function setCart(){
    let length
    $.ajax({
        url: "/part4/cartLength/",
        type:"get",
        success: function(data){
            console.log(data.length)
            length=data.length
            var cart = document.getElementById("cart")
            if(cart){
                cart.innerText=`cart(${length})`
                return
            }

        }
    })
    
}
// $(document).ready(function(){
//     let total
//     $("#addToCart").click(function(){
//         var name =$("#name").val();
//         var cpu =$("#cpuId").val()
//         var ram =$("#ramId").val()
//         var monitor=$("#monitorId").val()
//         var hard_disk=$("#hardDiskId").val()
//         var sound=$("#soundId").val()
//         console.log(cpu,ram,monitor,hard_disk,sound)
//         $.ajax({
//             url: "/part4/cart/",
//             type:"post",
            
//             data : {cpu:cpu,
//                     ram:ram,
//                     monitor:monitor,
//                     hard_disk:hard_disk,
//                     sound:sound,
//                     name : name,
//                     price : price
//                 },
//             success: function(data){
//                 console.log(data)
//             }
//         })
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
//     // $("#selectP1").click(function(){
//     //     var newCpu = $("#p1").val();
//     //     $("#cpu").val(newCpu)
//     //     var newText = $("#p1Text").text()
//     //     $("#cpuText").text(newText);
//     //     $("#blur").hide()
//     //     $("#cpuList").hide()
//     //     setPrice()
//     // })
//     // $("#selectRam1").click(function(){
//     //     var newRam = $("#ram1").val();
//     //     $("#ram").val(newRam)
//     //     var newText = $("#ram1Text").text()
//     //     $("#ramText").text(newText)
//     //     $("#blur").hide()
//     //     $("#ramList").hide();
//     //     setPrice()
//     // })
//     $(".selectCpuBtn").click(function(e){
//         var ele = e.target;
//         var parent = ele.parentElement
//         var price = parent.getElementsByTagName("input")[0].value
//         var id = parent.getElementsByClassName("id")[0].value
//         console.log(price)
//         var text = parent.getElementsByClassName("text")[0].innerText
//         console.log(text)
//         $("#cpu").val(price)
//         $("#cpuText").text(text)
//         $("#blur").hide()
//         $("#cpuList").hide()
//         $("#cpId").val(id)
//         setPrice()
//     })
//     $(".selectRamBtn").click(function(e){
//         var ele = e.target;
//         var parent = ele.parentElement
//         var price = parent.getElementsByClassName("price")[0].value
//         var id = parent.getElementsByClassName("id")[0].value
//         console.log(price)
//         var text = parent.getElementsByClassName("text")[0].innerText
//         console.log(text)
//         $("#ram").val(price)
//         $("#ramText").text(text)
//         $("#blur").hide()
//         $("#ramList").hide()
//         $('#ramId').val(id)
//         setPrice()
//     })
//   });

// function setPrice(){
//     var cpu =$("#cpu").val()
//     var ram =$("#ram").val()
//     var monitor=$("#monitor").val()
//     var hard_disk=$("#hardDisk").val()
//     var sound=$("#sound").val()
//     console.log(cpu,ram,monitor,hard_disk,sound)
//     total= parseInt(cpu)+parseInt(ram)+parseInt(monitor)+parseInt(hard_disk)+parseInt(sound)
//     $("#price").text(total)
// }
