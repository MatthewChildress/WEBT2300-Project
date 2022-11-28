export const submitDiscount = () => {
    $("#discountSubmit").click(function() {
      $("#discountModal").fadeOut();
      $("#modalClose").css("width", "0px");
      $("#modalClose").css("height", "0px");
    });
}
