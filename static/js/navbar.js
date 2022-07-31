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

