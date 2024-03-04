let slideCartBtn = document.querySelector('.fa-bag-shopping');
let CartDiv = document.getElementById('cart');
let closeCartBtn = document.getElementById('close-cart');
let addToCartButtons = document.querySelectorAll('.add-product');
let total = document.getElementById('total');

//SLIDE THE CART
function slideCart(){

    CartDiv.classList.add('open')

}

slideCartBtn.addEventListener('click', slideCart);

// CLOSE THE CART
function closeCArt() {

    CartDiv.classList.remove('open')

}

closeCartBtn.addEventListener('click', closeCArt);

// ADD TO CART
let Cart = [];

addToCartButtons.forEach((button, i) => {

function addToCart() {

let product = {

    name : document.querySelectorAll('.product-name')[i].textContent,
    price : document.querySelectorAll('.product-price')[i].textContent,
    image : document.querySelectorAll('img')[i].src,
    quantity : 1,

}

 // CHECK IF THE PRODUCT IS ALREADY IN THE CART 

  if (!Cart.some(function(c) {

    return c.name === product.name && c.price === product.price && c.image === product.image

})){

    Cart.push(product);

  } else {
  alert("This product is already in your cart");
   return false
  }

localStorage.setItem('cart', JSON.stringify(Cart));

  // CREATE A NEW DIV FOR THE PRODUCT
    let productDiv = document.createElement('div');
    productDiv.classList.add('products-cart');
    
// CREATE A NEW H3 FOR PRODUCT NAME
    let productName = document.createElement('h3');
    productName.textContent = `${product.name}`;
    productName.classList.add('product-name-cart')

// CREATE A NEW P FOR PRODUCT PRICE
    let productPrice = document.createElement('p');
    productPrice.textContent = `${product.price}`;
    productPrice.classList.add('product-price-cart');
    
// CEATE A NEW IMG ELEMENT FOT THE PRODUCT
    let productImg = document.createElement('img');
    productImg.src = product.image;
    productImg.classList.add('image-cart');

    // CREAT NEW INPUT FOR QUANTITy
    let quantityInput = document.createElement('input');
    quantityInput.setAttribute('type', 'number');
    quantityInput.setAttribute('value', '1');
    quantityInput.setAttribute('placeholder', 'Qt');
    quantityInput.classList.add('Qinput');

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

    // REMOVE THE PRODUCT DIV FROM THE CART DIV
    CartDiv.removeChild(productDiv);

getTotal()

}

removeBtn.addEventListener('click', removePro)

// UPGRADE THE QUANTITY
function qtyTotal(){

     product.quantity = Number(quantityInput.value); 
     getTotal(); 

}

quantityInput.addEventListener('input', qtyTotal) 

//GET TOTAL OF PRODUCTS INSIDE THE CART
function getTotal(){

let totalPrice = Cart.reduce(function (acc, curr){

let price = parseFloat(curr.price.slice(1));

return acc + price * curr.quantity  ;

},0)

totalPrice = totalPrice.toLocaleString("en-US", {

  style: "currency",
  
  currency: "USD",

});

total.textContent = `the total is : ${totalPrice}`;}

getTotal()

     // APPEND THE ELEMENTS TO THE DIV
    productDiv.appendChild(productImg);
    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(removeBtn);
    productDiv.appendChild(quantityInput);
  
    // APPEND THE DIV TO THE CARD
   
    CartDiv.insertBefore(productDiv,total);

  }

button.addEventListener('click', addToCart)

})








