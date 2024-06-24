const creating1 = document.createElement("p");
const node = document.createTextNode("This is new");
const element = document.getElementById("div1");
const child = document.getElementById("p1");
const child2 = document.getElementById("p2");
const creating2 = document.createElement("h2");
const childCreating2 = document.createTextNode("Keep going");

creating1.appendChild(node);
element.appendChild(creating1);
creating2.appendChild(childCreating2);

element.replaceChild(creating1, child);
element.replaceChild(creating2, child2);
