$(document).ready(function () {
  $(".content-box").click(function () {
    $(".content-box").animate(
      {
        width: "500px",
        height: "400px",
      },
      3000
    );
    $(".content-box").animate(
      {
        fontSize: "30px",
      },
      3000
    );
  });
});
