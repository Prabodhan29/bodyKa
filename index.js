// click to scroll top (for footer section)
$(".move-up span").click(function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    1000
  );
});

$(document).ready(function () {
  $(".fa-bars").click(function (e) {
    e.preventDefault();
    $(".vertical_navbar").toggleClass("vertical_navbar_active");
  });

  $(".fa-times").click(function (e) {
    e.preventDefault();
    $(".vertical_navbar").toggleClass("vertical_navbar_active");
  });
});
