$(document).ready(function () {
  $("#menu-toggle").click(function () {
    $("#side-nav").slideToggle();
  });

  $(".info-title").click(function () {
    $(".info-content").slideToggle("fast");
  });

  $(document).ready(function () {
    $(".content-box").click(function () {
      $(".content-box").animate(
        {
          width: "500px",
          height: "+=100px",
        },
        "slow"
      );
      $(".content-after").show().animate(
        {
          opacity: "1",
        },
        3000
      );
    });
  });
});
