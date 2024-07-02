$(document).ready(function () {
  $("#menu-toggle").click(function () {
    $("#side-nav").toggle(1000, function () {
      alert("Hi there");
    });
  });
});
