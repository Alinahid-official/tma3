window.addEventListener('load', function(){
    cartView()
    let selectRemoveBtns = document.getElementsByClassName("remove");
    console.log(selectRemoveBtns)
    for (i of selectRemoveBtns) {
        i.addEventListener('click', function(e) {
            e.preventDefault()
            var ele = e.target;
            var parent = ele.parentElement
            var index = parent.getElementsByClassName('id')[0].value
            
            location.reload()
        });
    }
})

function cartView(){
    let  html =''
    let total =0
    if(window.localStorage.cart){
        let cart = JSON.parse(window.localStorage.getItem('cart'))
        if(cart.length==0){
            html+=`<div class="w-50 pad-2">
                    you  have nothing in your cart
                </div>`
        }
        else{
            for(i in cart){
                total+=parseInt(cart[i].price)
                html+=`<div class="w-100 pad-2">
                            <input class='index hide    ' value=${i} />
                            <div>${cart[i].name}</div>
                            <div>${cart[i].cpu}</div>
                            <div>${cart[i].ram}</div>
                            <div>${cart[i].display}</div>
                            <div>${cart[i].hardDisk}</div>
                            <div>${cart[i].sound}</div>
                            <div>${cart[i].price}</div>
                            <button class="remove">remove</button>
                        </div>`
            }
        }
        
    }else{
        html+=`<div class="w-50 pad-2">
                    you  have nothing in your cart
                </div>`
    }
    document.getElementById("cartItems").innerHTML=html
    document.getElementById("total").innerHTML=total
}