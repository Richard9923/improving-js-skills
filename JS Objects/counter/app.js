const obj = { counter: 0 };

Object.defineProperty(obj, "reset", {
  get: function () {
    this.counter = 0;
  },
});

Object.defineProperty(obj, "increment", {
  get: function () {
    this.counter++;
  },
});

Object.defineProperty(obj, "decrement", {
  get: function () {
    this.counter--;
  },
});

Object.defineProperty(obj, "add", {
  set: function (value) {
    this.counter += value;
  },
});

Object.defineProperty(obj, "subtract", {
  set: function (value) {
    this.counter -= value;
  },
});

Object.preventExtensions(obj);
console.log(obj);
obj.nacionalidade = "English";

obj.reset;
obj.add = 5;
obj.subtyract = 1;
obj.increment;
obj.decrement;
obj.reset;
obj.increment;
document.getElementById("demo").innerHTML = obj.counter;

const fruits = ["Bananas", "Orange", "Apple", "Mango"];

console.log(fruits);
fruits.push("Kiwi");
console.log(fruits);
let answerFirst = Object.isExtensible(fruits);
console.log(answerFirst);

const people = { firstName: "John", lastName: "Doe" };
Object.preventExtensions(people);

let answer = Object.isExtensible(people);
console.log(answer);
