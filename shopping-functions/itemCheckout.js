const purchaseBtn = document.querySelector('.purchase-btn');

purchaseBtn.addEventListener('click', purchaseBtnClicked)

const itemCheckout = () => {
    alert('Thank you for your purchase');
    cartModalOverlay.style.transform = 'translateX(-100%)'
    let cartItems = document.getElementsByClassName('product-rows')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)

    }
    updateCartPrice()
}