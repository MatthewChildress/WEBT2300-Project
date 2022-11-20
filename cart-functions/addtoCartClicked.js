import { updateCartTotal } from "./updateCartTotal.js"
import { addItemToCart } from './addItemtoCart.js'

export const addToCartClicked = (e) => {
    const button = e.target
    // moves up two positions of DOM tree
    const shopItem = button.parentElement.parentElement

    // get elements by classname returns an array. [0] returns the clicked item
    const image = shopItem.getElementsByClassName('card__image')[0].src
    const name = shopItem.getElementsByClassName('card__name')[0].innerText
    const price = shopItem.getElementsByClassName('card__price')[0].innerText

    // creates new item in shopping cart
    addItemToCart(name, price, image)

    // updates total with each addition
    updateCartTotal()
}