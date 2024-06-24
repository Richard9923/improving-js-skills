const btn = document.getElementById("btn");
const testando = document.getElementById("teste");

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

let p1 = 2;
let p2 = 5;
testando.addEventListener("click", function () {
  myThirdFunction(p1, p2);
});
function myThirdFunction(a, b) {
  testando.innerHTML = a * b;
}

function myFunction() {
  alert("Here we go again.");
}

function mySecondFunction() {
  alert("Here we go a third time hahaha");
}

window.addEventListener("resize", function () {
  this.document.getElementById("demo").innerHTML = "funcionou";
});
