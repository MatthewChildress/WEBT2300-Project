// imports from other js files
import timeCalculation from './time-functions/timeCalculation.js'
import timeGreeting from './time-functions/timeGreeting.js'
import itemsForEach from './ui-functions/itemsForEach.js'
import { showCart } from './ui-functions/showCart.js'
import { removeCartItem } from './cart-functions/removeCartItem.js'
import { quantityChanged } from './cart-functions/quantityChanged.js'
import { addToCartClicked } from './cart-functions/addtoCartClicked.js'
import { purchaseItems } from './cart-functions/purchaseItems.js'
/* import cartLogic from './cart-functions/cartLogic.js' */




/* cartLogic(); */

// gives time & day. can append to be two divs if needed
setInterval(timeCalculation, 1000);
timeGreeting();

// jQuery to open & close shopping cart div
showCart();


//iterates of array of objects and creates dom elements and their ids/classes
itemsForEach();


if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    const removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (let i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    const quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (let i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    const addToCartButtons = document.getElementsByClassName('item__add')
    for (let i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    /* document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseItems) */
}
