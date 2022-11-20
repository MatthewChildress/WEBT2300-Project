import { updateCartTotal } from "./updateCartTotal.js"

export const purchaseItems = () => {
    alert('Thank you for your purchase')
    const cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}