$(document).ready(function () {

    let create = document.createElement("p");
    create.innerHTML = "A new new paragraph";

    $("#container").append("<p>A new paragraph<p/>", "<p>Another paragraph</p>", create);


})