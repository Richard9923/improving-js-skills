$(document).ready(function () {
  $("#menu-toggle").click(function () {
    $("#side-nav").slideToggle();
  });

  $(".info-title").click(function () {
    $(".info-content").slideToggle("fast");
  });
});
