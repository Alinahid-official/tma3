$(document).ready(function(){
    $("#side-nav").hide()
    let toggle = false
    $("#bar").click(function(){
        if(toggle){
            $("#side-nav").hide()
            toggle=false
            return
        }
        $("#side-nav").show()
        toggle=true
    })
})