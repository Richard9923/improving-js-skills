const person = {};

person.firstName = "John";
person.secondName = "Johnsons";
person.age = 34;
person.eyeColor = "Brown";

console.log(person);

const secondPerson = new Object();

// Add Properties

secondPerson.firstName = "Rafael";
secondPerson.secondName = "Willians";
secondPerson.age = 22;
secondPerson.eyeColor = "Blue";

console.log(secondPerson);

function Person(first, last, age, eye) {
  this.first = first;
  this.last = last;
  this.age = age;
  this.eye = eye;
  this.nationality = "English";
}

const jogadorFenomeno = new Person("Ronaldo", "Fenomeno", 33, "blue");
console.log(jogadorFenomeno);

const anotherObject = { firstName: "Anne", secondName: "Smith" };
console.log(anotherObject);

Object.assign(anotherObject, jogadorFenomeno);
console.log(anotherObject);

const car = { type: "Fiat", model: "500", color: "white" };
console.log(car);

const fruits = { Bananas: 300, Oranges: 400, Apples: 500 };

let text = "";

for (let [fruit, amount] of Object.entries(fruits)) {
  text += fruit + ": " + amount + "<br>";
}

const frutas = { Bananas: 300, Oranges: 200, Apples: 800 };
const myMap = new Map(Object.entries(frutas));
