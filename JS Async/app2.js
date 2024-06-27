const paragrafo1 = document.getElementById("demo");

function myDisplayer(something) {
  paragrafo1.innerHTML = something;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(1, 2, myDisplayer);

setTimeout(myFunction, 5000);
setInterval(myFunction, 5000);

function myFunction() {
  let d = new Date();
  paragrafo1.innerHTML =
    d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
}
