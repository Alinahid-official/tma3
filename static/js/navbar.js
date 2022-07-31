window.addEventListener('load',function(){

    console.log('yes')
    document.getElementById("side-nav").style.display='none'
    let toggle=false
    document.getElementById("bar").addEventListener('click',function(){
        if(toggle){
            document.getElementById("side-nav").style.display='none'
            toggle=false
            return
        }
        document.getElementById('side-nav').style.display='flex'
        toggle=true
        
    })
})

// $(document).ready(function(){
//     $("#side-nav").hide()
//     let toggle = false
//     $("#bar").click(function(){
//         if(toggle){
//             $("#side-nav").hide()
//             toggle=false
//             return
//         }
//         $("#side-nav").show()
//         toggle=true
//     })
// })