const btn = document.getElementById("btn");

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

btn.addEventListener("click", displayDate);

btn.addEventListener("click", function () {
  alert("Hello World");
});

btn.addEventListener("click", myFunction);
btn.addEventListener("click", mySecondFunction);
btn.addEventListener("mouseover", myFunction);
btn.addEventListener("mouseout", mySecondFunction);

function myFunction() {
  alert("Here we go again.");
}

function mySecondFunction() {
  alert("Here we go a third time hahaha");
}
