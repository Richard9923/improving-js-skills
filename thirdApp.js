const creating1 = document.createElement("p");
const node = document.createTextNode("This is new");
const element = document.getElementById("div1");
creating1.appendChild(node);
element.appendChild(creating1);
