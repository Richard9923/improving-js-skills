const paragrafo = document.getElementById("demo");
const paragrafo2 = document.getElementById("demo2");

function mySecondDisplay(some) {
  paragrafo2.innerHTML = some;
}

function myCalculator(a, b) {
  let calc = a * b;
  return calc;
}

function mySecondCalculator(num1, num2, myCallBack) {
  let sum = num1 + num2;
  myCallBack(sum);
}

function myDisplayer(some) {
  paragrafo.innerHTML = some;
}

function myFirst() {
  myDisplayer("Hello");
}

function mySecond() {
  myDisplayer("Goodbye");
}

myFirst();
mySecond();

let result = myCalculator(2, 5);
mySecondDisplay(result);

mySecondCalculator(5, 7, mySecondDisplay);

const myNumbers = [4, 1, -20, -7, 5, 9, -6];
const postNumbers = removeNeg(myNumbers, (x) => x >= 0);
paragrafo2.innerHTML = postNumbers;

function removeNeg(numbers, CallBack) {
  const myArray = [];
  for (const x of numbers) {
    if (CallBack(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}
