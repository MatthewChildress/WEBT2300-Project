// imports from other js files
import timeCalculation from './time-functions/timeCalculation.js'
import timeGreeting from './time-functions/timeGreeting.js'
import itemsForEach from './ui-functions/itemsForEach.js'
import { showCart } from './ui-functions/showCart.js'
import { removeCartItem } from './cart-functions/removeCartItem.js'
import { quantityChanged } from './cart-functions/quantityChanged.js'
import { addToCartClicked } from './cart-functions/addtoCartClicked.js'
import { purchaseItems } from './cart-functions/purchaseItems.js'
import { openDiscountModal } from './ui-functions/openDiscountModal.js'
import { closeDiscountModal } from './ui-functions/closeDiscountModal.js'
import { submitDiscount } from './ui-functions/submitDiscount.js'
import { filterItems } from './ui-functions/filterItems.js'
import { getDiscount } from './cart-functions/getDiscount.js'
import { checkoutReceiptClose } from './cart-functions/checkoutReceipt.js'


document.getElementById("discountSubmit").addEventListener('click', getDiscount);
document.getElementById("checkoutClose").addEventListener('click', checkoutReceiptClose);

// gives time & day. can append to be two divs if needed
setInterval(timeCalculation, 1000);
timeGreeting();

// jQuery to open & close shopping cart div
showCart();
openDiscountModal();
closeDiscountModal();
submitDiscount();
filterItems();

//iterates of array of objects and creates dom elements and their ids/classes
itemsForEach();

// check for dom to be loaded before adding event listeners to buttons
if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {

    const addToCartButtons = document.getElementsByClassName('item__add')
    for (let i = 0; i < addToCartButtons.length; i++) {
        const button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementById('checkout__button').addEventListener('click', purchaseItems);
}
