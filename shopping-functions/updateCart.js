export const updateCartPrice = () => {
    let total = 0
    for (let i = 0; i < productRow.length; i += 2) {
        cartRow = productRow[i]
        let priceElement = cartRow.getElementsByClassName('cart-price')[0]
        let quantityElement = cartRow.getElementsByClassName('product-quantity')[0]
        let price = parseFloat(priceElement.innerText.replace('$', ''))
        let quantity = quantityElement.value
        total = total + (price * quantity)

    }
    document.getElementsByClassName('total-price')[0].innerText = `$${total}`

    document.getElementsByClassName('cart-quantity')[0].textContent = i /= 2
}