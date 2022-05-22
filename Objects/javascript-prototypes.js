// Visually Understanding JavaScript Prototypes

let myObj = {}; // new Object()
console.log(myObj.constructor); //function Object()
console.log(myObj.__proto__);
console.log(myObj.__proto__ === myObj.constructor.prototype);

function Cat() {}

let kitty = new Cat();
console.log(kitty);
console.log(kitty.__proto__ === Cat.prototype);
console.log(kitty.__proto__.__proto__);
console.log(kitty.__proto__.__proto__ === Object.prototype);

console.log(Object.prototype.__proto__);

function Animal() {}

Object.setPrototypeOf(Cat.prototype, Animal.prototype); //Cats Prototype is set to the Animal Prototype

console.log(kitty);
console.log(kitty.__proto__.__proto__);
console.log(kitty.__proto__.__proto__.__proto__.__proto__);
