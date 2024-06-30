const demo = document.getElementById("demo");
getText("fetch_info.txt");
async function infoFetch(info) {
  let myObjct = await fetch(file);
  let myText = await myObjct.text();
  demo.innerHTML = myText;
}
