let slideCartBtn = document.querySelector('.fa-bag-shopping');
let CartDiv = document.getElementById('cart');
let closeCartBtn = document.getElementById('close-cart');
let addToCartButtons = document.querySelectorAll('.add-product');

//SLIDE THE CART
function slideCart(){

    CartDiv.classList.add('open')

}

slideCartBtn.addEventListener('click', slideCart)

// CLOSE THE CART
function closeCArt() {

    CartDiv.classList.remove('open')

}

closeCartBtn.addEventListener('click', closeCArt)

// ADD TO CART
let Cart = [];

addToCartButtons.forEach((button, i) => {

function addToCart() {

let product = {

    name : document.querySelectorAll('.product-name')[i].textContent,
    price : document.querySelectorAll('.product-price')[i].textContent,
    image : document.querySelectorAll('img')[i].src

}

Cart.push(product);

localStorage.setItem('cart', JSON.stringify(Cart));

  // Create a new div for the product
    let productDiv = document.createElement('div');
    productDiv.classList.add('products-cart');
    
// CREATE A NEW H3 FOR PRODUCT NAME
    let productName = document.createElement('h3');
    productName.textContent = `${product.name}`;
    productName.classList.add('product-name-cart')


// CREATE A NEW P FOR PRODUCT price
    let productPrice = document.createElement('p');
    productPrice.textContent = `${product.price}`;
    productPrice.classList.add('product-price-cart');
    

// Create a new img element for the product image
    let productImg = document.createElement('img');
    productImg.src = product.image;
    productImg.classList.add('image-cart');

    // CREATE A NEW BUTTON FOR REMOVE PRODUCT FROM CART
    let removeBtn = document.createElement('button');
    removeBtn.textContent = 'remove';
    removeBtn.classList.add('remove');

function removePro(){

  // Remove the product from the cart
    Cart = Cart.filter(function(p){

     return p.name !== product.name

    })
    //UPDATE THE DATA
    localStorage.setItem('cart', JSON.stringify(Cart));

    // Remove the product div from the cart div
    CartDiv.removeChild(productDiv);

}

removeBtn.addEventListener('click', removePro)

     // Append the elements to the div
    productDiv.appendChild(productImg);
    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(removeBtn);
  
    // Append the div to the cart
    CartDiv.appendChild(productDiv);
  }

button.addEventListener('click', addToCart)

})






