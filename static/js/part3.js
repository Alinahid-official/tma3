$(document).ready(function(){
    // let total
    $("#addToCart").click(function(){
        var price = $("#price").text()
        var name = $("#name").val()
        $.ajax({
            url: "/part3/cart/",
            type:"post",
            
            data : {
                    name : name,
                    price : price
                },
            success: function(data){
                console.log(data)
            }
        })
        // location.replace('/part/cart')
  
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
    $("#selectP1").click(function(){
        var newCpu = $("#p1").val();
        $("#cpu").val(newCpu)
        var newText = $("#p1Text").text()
        $("#cpuText").text(newText);
        $("#blur").hide()
        $("#cpuList").hide()
        setPrice()
    })
    $("#selectRam1").click(function(){
        var newRam = $("#ram1").val();
        $("#ram").val(newRam)
        var newText = $("#ram1Text").text()
        $("#ramText").text(newText)
        $("#blur").hide()
        $("#ramList").hide();
        setPrice()
    })
  });

function setPrice(){
    var cpu =$("#cpu").val()
    var ram =$("#ram").val()
    var monitor=$("#monitor").val()
    var hard_disk=$("#hardDisk").val()
    var sound=$("#sound").val()
    var total= parseInt(cpu)+parseInt(ram)+parseInt(monitor)+parseInt(hard_disk)+parseInt(sound)
    $("#price").text(total)
}