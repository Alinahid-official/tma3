
$(document).ready(function(){
    let total
    $("#addToCart").click(function(){
        var name =$("#name").val();
        var cpu =$("#cpuId").val()
        var ram =$("#ramId").val()
        var monitor=$("#monitorId").val()
        var hard_disk=$("#hardDiskId").val()
        var sound=$("#soundId").val()
        console.log(cpu,ram,monitor,hard_disk,sound)
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
            }
        })
    })
    setPrice()
    $("#changeCpu").click(function(){
        $('#blur').show();
        $("#cpuList").show();
    })
    $("#changeRam").click(function(){
        $('#blur').show();
        $("#ramList").show();
    })
    $("#closeBtn").click(function(){
        $('#blur').hide();
        $("#ramList").hide();
        $("#cpuList").hide();
    })
    // $("#selectP1").click(function(){
    //     var newCpu = $("#p1").val();
    //     $("#cpu").val(newCpu)
    //     var newText = $("#p1Text").text()
    //     $("#cpuText").text(newText);
    //     $("#blur").hide()
    //     $("#cpuList").hide()
    //     setPrice()
    // })
    // $("#selectRam1").click(function(){
    //     var newRam = $("#ram1").val();
    //     $("#ram").val(newRam)
    //     var newText = $("#ram1Text").text()
    //     $("#ramText").text(newText)
    //     $("#blur").hide()
    //     $("#ramList").hide();
    //     setPrice()
    // })
    $(".selectCpuBtn").click(function(e){
        var ele = e.target;
        var parent = ele.parentElement
        var price = parent.getElementsByTagName("input")[0].value
        var id = parent.getElementsByClassName("id")[0].value
        console.log(price)
        var text = parent.getElementsByClassName("text")[0].innerText
        console.log(text)
        $("#cpu").val(price)
        $("#cpuText").text(text)
        $("#blur").hide()
        $("#cpuList").hide()
        $("#cpId").val(id)
        setPrice()
    })
    $(".selectRamBtn").click(function(e){
        var ele = e.target;
        var parent = ele.parentElement
        var price = parent.getElementsByClassName("price")[0].value
        var id = parent.getElementsByClassName("id")[0].value
        console.log(price)
        var text = parent.getElementsByClassName("text")[0].innerText
        console.log(text)
        $("#ram").val(price)
        $("#ramText").text(text)
        $("#blur").hide()
        $("#ramList").hide()
        $('#ramId').val(id)
        setPrice()
    })
  });

function setPrice(){
    var cpu =$("#cpu").val()
    var ram =$("#ram").val()
    var monitor=$("#monitor").val()
    var hard_disk=$("#hardDisk").val()
    var sound=$("#sound").val()
    console.log(cpu,ram,monitor,hard_disk,sound)
    total= parseInt(cpu)+parseInt(ram)+parseInt(monitor)+parseInt(hard_disk)+parseInt(sound)
    $("#price").text(total)
}
