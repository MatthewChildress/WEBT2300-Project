import { updateCartTotal } from "./updateCartTotal.js"

export const removeCartItem = (e) => {
    const buttonClicked = e.target

    // moves up 3 instances of DOM tree to remove that element
    buttonClicked.parentElement.parentElement.parentElement.remove()

    // updates cart total to reflect
    updateCartTotal()
}