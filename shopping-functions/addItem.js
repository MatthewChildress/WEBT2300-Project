const addToCart = document.getElementsByClassName('add-to-cart');
const productRow = document.getElementsByClassName('product-row');

for (let i = 0; i < addToCart.length; i++) {
    button = addToCart[i];
    button.addEventListener('click', addToCartClicked)
}

let addToCartClicked = (e) => {
    button = e.target;
    let cartItem = button.parentElement;
    let price = cartItem.getElementsByClassName('product-price')[0].innerText;

    let itemImage = cartItem.getElementsByClassName('product-image')[0].src;
    addItemToCart(price, itemImage);
    updateCartPrice()
}

let addItemToCart = (price, itemImage) => {
    let productRow = document.createElement('div');
    productRow.classList.add('product-row');
    let productRows = document.getElementsByClassName('product-rows')[0];

    // need to decide if we want multiples or not
    /*  let cartImage = document.getElementsByClassName('cart-image'); 
      for (let i = 0; i < cartImage.length; i++){
      if (cartImage[i].src == itemImage){
        alert ('This item has already been added to the cart')
        return;
      } */
}


// note: may use something similar to this for mapping to make filter function easier
let cartRowItems = `
  <div class="product-row">
        <img class="cart-image" src="${itemImage}" alt="">
        <span class ="cart-price">${price}</span>
        <input class="product-quantity" type="number" value="1">
        <button class="remove-btn">Remove</button>
        </div>
        
      `
productRow.textContent = cartRowItems;
productRows.append(productRow);

// remember to separate event listeners to main.js
productRow.getElementsByClassName('remove-btn')[0].addEventListener('click', removeItem)
productRow.getElementsByClassName('product-quantity')[0].addEventListener('change', changeQuantity)
updateCartPrice()