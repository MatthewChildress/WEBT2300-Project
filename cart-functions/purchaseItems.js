import { updateCartTotal } from "./updateCartTotal.js"

export const purchaseItems = () => {
    const cartItems = document.getElementsByClassName('cart__items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}