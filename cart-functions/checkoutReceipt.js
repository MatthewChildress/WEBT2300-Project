export const checkoutReceiptOpen = () => {
    $('.button__checkout').on('click', function() {
        $('.modal__checkout').fadeIn(200);
      });
}

export const checkoutReceiptClose = () => {
    $('.checkout__close').on('click', function() {
        // fade out filter layer and modal
        $('.modal__checkout').fadeOut(200);
      });
}