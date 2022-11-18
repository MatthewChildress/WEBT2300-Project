export const showCart = () => {
    $(document).ready(function () {
        $(".cart__toggle").click(function () {
          $("#productCards").addClass("active");
          $("#cart").addClass("active");
        });

        $(".close__cart").click(function () {
          $("#productCards").removeClass("active");
          $("#cart").removeClass("active");
        });
      });
}
