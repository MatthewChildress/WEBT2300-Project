export const updateCartTotal = () => {
    const cartItemContainer = document.getElementsByClassName('cart__items')[0]
    const cartRows = cartItemContainer.getElementsByClassName('cart__row')
    const discount = document.getElementById('discountTotal').innerHTML

    const checkoutItemContainer = document.getElementsByClassName('checkout__items')[0]
    const checkoutRows = checkoutItemContainer.getElementsByClassName('checkout__row')

    let subTotal = 0
    let total = 0
    let discountAmount;
    let quantity = 0;

    if (discount == undefined || NaN) {
        discountAmount = parseInt(0);
    }
    else
    {
        discountAmount = parseInt(discount)
    }

    // checks the quantity and price of each item and returns sum
    for (let i = 0; i < cartRows.length; i++) {
        const cartRow = cartRows[i]
        const cartPrice = cartRow.getElementsByClassName('cart__price')[0]
        const cartQuantity = cartRow.getElementsByClassName('cart__quantity')[0]

        const checkoutRow = checkoutRows[i]
        const checkoutQuantity = checkoutRow.getElementsByClassName('checkout__quantity')[0]

        // removes dollar sign from price string
        const priceNoDollar = cartPrice.innerText.replace('$', '')

        // removes commas from price string other will only return first 2-3 digits. can use .toLocaleString("en-US") but will add a zero to beginning
        const price = priceNoDollar.replace(',', '')
        quantity = cartQuantity.value
        checkoutQuantity.innerText = cartQuantity.value

        // turns into floating point
        subTotal += parseFloat(price * quantity)
        total = subTotal - parseInt(subTotal * (discountAmount / 100))

    }
    document.getElementsByClassName('cart__total')[0].innerText = `$${subTotal}`
    document.getElementById('finalTotal').innerText = `$${total}`

    document.querySelector('.checkout__subtotal').innerText = `$${subTotal}`
    document.querySelector('.checkout__discount').innerText = `${discountAmount}%`
    document.querySelector('.checkout__total').innerText = `$${total}`


}