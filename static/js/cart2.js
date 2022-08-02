window.addEventListener('load',function(){
    setTotal()
    let selectRemoveBtns = document.getElementsByClassName("remove");
    console.log(selectRemoveBtns)
    for (i of selectRemoveBtns) {
        i.addEventListener('click', function(e) {
            e.preventDefault()
            var ele = e.target;
            var parent = ele.parentElement
            var id = parent.getElementsByClassName('id')[0].value
            $.ajax({
                url: "/part4/removeCartItem/",
                type:"post",
                data :{id :id},
                success: function(data){
                    console.log(data)
                }
            })
            
            location.reload()
        });
    }
    
})

function setTotal(){
    let total=0
    var prices = document.getElementsByClassName('price')
    console.log(prices)
    for(i=0; i<prices.length;i++){
        var price = prices[i].innerText
        console.log('price',price[i])
        total+=parseInt(price)
    }
    document.getElementById("total").innerText=total 
}