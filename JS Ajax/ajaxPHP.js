function showHint(str) {
  if (str.lenght == 0) {
    document.getElementById("txtHint").innerHTML = "";
    return;
  }
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("txtHint").innerHTML = this.responseText;
  };

  xhttp.open("GET", "gethint.php?q=" + str);
  xhttp.send();
}
