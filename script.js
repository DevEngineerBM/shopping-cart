let addToCartBtn = document.querySelector('.fa-bag-shopping');
let Cart = document.getElementById('cart');
let closeCartBtn = document.getElementById('close-cart');


//SLIDE THE CART
function slideCart(){

Cart.classList.add('open')

}

addToCartBtn.addEventListener('click', slideCart)

// CLOSE CART
function closeCArt() {

Cart.classList.remove('open')


}



closeCartBtn.addEventListener('click', closeCArt)