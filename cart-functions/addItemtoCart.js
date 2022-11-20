import { removeCartItem } from './removeCartItem.js'
import { quantityChanged } from './quantityChanged.js'

export const addItemToCart = (name, price, image) => {
    
    const cartItems = document.getElementsByClassName('cart__items')[0]
    const cartItemNames = cartItems.getElementsByClassName('cart__item__name')
    
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

    // attaches elements to DOM 
    cartItems.appendChild(cartRow);
    cartRow.appendChild(cartImage);
    cartRow.appendChild(cartName);
    cartRow.appendChild(cartPrice);
    cartRow.appendChild(inputTD);
    inputTD.appendChild(cartQuantity);
    cartRow.appendChild(btnTD);
    btnTD.appendChild(cartButton);

    // sets class names 
    cartRow.classList.add('cart-row')
    cartRow.className = "cart__row"
    cartImage.className = "cart__item__image";
    cartName.className = "cart__item__name";
    cartQuantity.className = "cart__quantity"
    cartPrice.className = "cart__price"
    cartButton.className = "cart__button"

    // sets different attributes for elements
    cartImage.src = `${image}`
    cartName.textContent = `${name}`
    cartPrice.textContent = `${price}`
    cartQuantity.setAttribute("type", "number");
    cartQuantity.setAttribute("value", "1");
    cartButton.innerHTML = `<span class="material-symbols-outlined item__subtract">close</span>`

    // creates event listeners for input quantity and remove buttons
    cartRow.getElementsByClassName('cart__button')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart__quantity')[0].addEventListener('change', quantityChanged)
}