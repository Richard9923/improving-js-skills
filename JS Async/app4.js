async function myFunction() {
  return "Hello";
}

function display(something) {
  document.getElementById("demo").innerHTML = something;
}

function myFunction() {
  return Promise.resolve("Hello");
}

myFunction().then(
  function (value) {
    display(value);
  },
  function (erro) {
    display("nao");
  }
);

async function myDisplay() {
  let myPromise = new Promise(function (resolve) {
    resolve("I love you !!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();

async function myDisplay() {
  let myPromiseTwo = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("don't");
    }, 3000);
  });
  document.getElementById("demo").innerHTML = await myPromiseTwo;
}

async function myDisplayTwo() {
  let myPromiseThree = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("give");
    }, 4000);
  });
  document.getElementById("demo").innerHTML = await myPromiseThree;
}

async function myDisplayThree() {
  let myPromiseThree = new Promise(function (resolve) {
    setTimeout(function () {
      resolve("up!");
    }, 5000);
  });
  document.getElementById("demo").innerHTML = await myPromiseThree;
}
myDisplay();
myDisplayTwo();
myDisplayThree();
