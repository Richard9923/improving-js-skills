function loadDoc() {
  const request = new XMLHttpRequest();
  request.onload = function () {
    document.getElementById("demo").innerHTML = this.getAllResponseHeaders();
  };
  request.open("GET", "ajax_info_txt");
  request.send();
}
