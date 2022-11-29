import { removeCartItem } from './removeCartItem.js'
import { quantityChanged } from './quantityChanged.js'

export const addItemToCart = (name, price, image) => {
    
    const cartItems = document.getElementsByClassName('cart__items')[0]
    const cartItemNames = cartItems.getElementsByClassName('cart__item__name')

    const checkoutItems = document.getElementsByClassName('checkout__items')[0]
    
    // check to ensure only one instance of item added to cart initially
    for (let i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == name) {
            alert('This item has been added to the cart already')
            return
        }
    }

    // creates table elements for shopping cart
    const cartRow = document.createElement('tr')
    const cartImage = document.createElement('img');
    const cartName = document.createElement('td');
    const cartPrice = document.createElement('td');
    const inputTD = document.createElement('td');
    const cartQuantity = document.createElement('input');
    const btnTD = document.createElement('td');
    const cartButton = document.createElement('button');

    const checkoutRow = document.createElement('tr')
    const checkoutImage = document.createElement('img');
    const checkoutName = document.createElement('td');
    const checkoutPrice = document.createElement('td');
    const checkoutQuantity = document.createElement('td');

    // attaches elements to cart DOM 
    cartItems.appendChild(cartRow);
    cartRow.appendChild(cartImage);
    cartRow.appendChild(cartName);
    cartRow.appendChild(cartPrice);
    cartRow.appendChild(inputTD);
    inputTD.appendChild(cartQuantity);
    cartRow.appendChild(btnTD);
    btnTD.appendChild(cartButton);

    // attaches elements to checkout DOM
    checkoutItems.appendChild(checkoutRow);
    checkoutRow.appendChild(checkoutImage);
    checkoutRow.appendChild(checkoutName);
    checkoutRow.appendChild(checkoutPrice);
    checkoutRow.appendChild(checkoutQuantity);

    // sets class names for cart
    cartRow.classList.add('cart-row')
    cartRow.className = "cart__row"
    cartImage.className = "cart__item__image";
    cartName.className = "cart__item__name";
    cartQuantity.className = "cart__quantity"
    cartPrice.className = "cart__price"
    cartButton.className = "cart__button"

    // sets class names for checkout
    checkoutRow.classList.add('checkout-row')
    checkoutRow.className = "checkout__row"
    checkoutImage.className = "checkout__item__image";
    checkoutName.className = "checkout__item__name";
    checkoutQuantity.className = "checkout__quantity"
    checkoutQuantity.id = "checkoutQuantity"
    checkoutPrice.className = "checkout__price"

    // sets different attributes for cart elements
    cartImage.src = `${image}`
    cartName.textContent = `${name}`
    cartPrice.textContent = `${price}`
    cartQuantity.setAttribute("type", "number");
    cartButton.innerHTML = `<span class="material-symbols-outlined item__subtract">close</span>`

    // sets different attributes for checkout elements
    checkoutImage.src = `${image}`
    checkoutName.textContent = `${name}`
    checkoutPrice.textContent = `${price}`
    checkoutQuantity.textContent = cartQuantity.value

    // creates event listeners for input quantity and remove buttons
    cartRow.getElementsByClassName('cart__button')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart__quantity')[0].addEventListener('change', quantityChanged)
}