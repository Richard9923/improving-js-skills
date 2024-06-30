infoFetch("fetch_info.txt");

async function infoFetch(info) {
  let myObjct = await fetch(info);
  let myText = await myObjct.text();
  document.getElementById("demo").innerHTML = myText;
}
