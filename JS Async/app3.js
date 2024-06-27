// Learning about premises

// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

// let myPromise = new Promise(function (myResolve, myReject) {
//   let x = 0;
//   if (x == 0) {
//     myResolve("OK");
//   } else {
//     myReject("Error");
//   }
// });

// myPromise.then(
//   function (value) {
//     myDisplayer(value);
//   },
//   function (error) {
//     myDisplayer(error);
//   }
// );

// setTimeout(function () {
//   myFunction("I love you!!");
// }, 3000);

// function myFunction(value) {
//   document.getElementById("demo").innerHTML = value;
// }

// function getFile(myCallback) {
//   let req = new XMLHttpRequest();
//   req.open("GET", "mycar.html");
//   req.onload = function () {
//     if (req.status == 200) {
//       myCallback(req.responseText);
//     } else {
//       myCallback("Error: " + req.status);
//     }
//   };
//   req.send();
// }

// getFile(myDisplayer);

// myPromise.then(
//   function (value) {
//     myDisplayer(value);
//   },
//   function (error) {
//     myDisplayer(error);
//   }
// );

// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }

let myPromise2 = new Promise(function (myResolve, myReject) {
  let req = new XMLHttpRequest();
  req.open("GET", "mycar.html");
  req.onload = function () {
    if (req.status == 200) {
      myResolve(req.response);
    } else {
      myReject("File not Found");
    }
  };
  req.send();
});

myPromise2.then(
  function (value) {
    myDisplayer(value);
  },
  function (error) {
    myDisplayer(error);
  }
);
