$(document).ready(function () {
  $(".content-box").click(function () {
    $(".content-box").animate(
      {
        width: "500px",
        height: "400px",
      }, 3000).animate({
        fontSize: '30px'
    }, 3000).fadeOut();
  });
  
    $("button").click(function () {
        $(".content-box").stop(true, true);
    })
});

