const elemento = document.getElementById("h2");
const p = document.getElementsByTagName("p");
const titulos = (document.getElementsByClassName("titulo").innerHTML = "helou");
const xstyke = document.querySelectorAll("p.intro");
const teste = document.getElementsByClassName("ola");
const testeID = document.getElementById("teste");
const change = (document.getElementById("p2").style.color = "blue");

change.style.color = "green";

teste.innerHTML = "TITULO";
testeID.innerHTML = "titulo";

function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}
