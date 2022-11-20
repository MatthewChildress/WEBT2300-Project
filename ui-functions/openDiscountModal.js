export const openDiscountModal = () => {
    $("#modalOpen").click(function() {
        const sa = $(this).text();
        $(this).text("");
        $(this).addClass("ball");
        setTimeout(function() {
          $("#discountModal").fadeIn();
          $("#modalClose").css("width", "30px");
          $("#modalClose").css("height", "30px");
          setTimeout(function() {
            $("#modalOpen").removeClass("ball");
            $("#modalOpen").text(sa);
          }, 500);
        }, 800);
      });
}
