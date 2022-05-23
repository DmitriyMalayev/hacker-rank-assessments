// Object.create(prototype, propertiesObject) method
// propertiesObject same as 2nd argument from Object.defineProperties()

let obj = {
  name: "Dmitriy",
};

let obj2 = Object.create(obj, {});

console.log(obj2);
console.log(obj.name);

let obj3 = Object.create(obj2, {
  fullName: {
    configurable: true,
    writable: true,
    enumerable: true,
    value: "Jeff Lebowski",
  },
  canBowl: {
    configurable: true,
    writable: true,
    enumerable: true,
    value: "Jeff Lebowski",
  },
});
console.log(obj3);
console.log(obj3.name);
