const myElement = document.getElementById("demo");
const demostrac = document.getElementById("teste");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    myElement.innerHTML = "Geolocalização não é suportada nesse navegador.";
  }
}

function showPosition(position) {
  myElement.innerHTML =
    "Latitude: " +
    position.coords.latitude +
    "<br>Longitude: " +
    position.coords.longitude;
}

function myFunction() {
  const inpObj = document.getElementById("id1");
  if (!inpObj.checkValidity()) {
    document.getElementById("demo").innerHTML = inpObj.validationMessage;
  }
}

function goBack() {
  window.history.back();
}

function goBackTwo() {
  window.history.go(-2);
}

localStorage.setItem("name", "John Doe");
localStorage.setItem("age", 25);

demostrac.innerHTML = localStorage.getItem("name");
demostrac.innerHTML = localStorage.getItem("age");
console.log(localStorage.key);
