/*
Different Ways of Creating Objects

Object Literals
Object.create() with descriptors
function + new
factory function with closures
JS Class
*/

// Object Literals
let obj1 = {
  prop1: "value1",
  prop2: "value2",
  prop3: function () {
    return this.prop1;
  },
};
obj1;
obj1.prop3();

let proto = {
  prop3: function () {
    return this.prop1;
  },
};

let obj2 = Object.create(
  {},
  {
    prop1: {
      writable: true,
      enumerable: true,
      configurable: true,
      value: "value1",
    },
    prop2: {
      writable: true,
      enumerable: false,
      configurable: true,
      value: "value2",
    },
  }
);

obj2.prop3 = function () {
  return this.prop1;
};

console.log(2, obj2);
console.log(obj2.prop3());

let Obj = function (v1, v2) {
  this.prop1 = v1;
  this.prop2 = v2;
  this.prop3 = function () {
    return this.prop1;
  };
};

let obj3 = new Obj("value1", "value2");
console.log(3, obj3);
console.log(obj3.prop3());

let ObjFF = function (v1, v2) {
  let _prop1 = v1;
  let _prop2 = v2;
  return {
    prop1: _prop1,
    prop2: _prop2,
    prop3: function () {
      return _prop1;
    },
  };
};

let obj4 = ObjFF("value1", "value2");
console.log(4, obj4);
console.log(obj4.prop3());



class ObjC{
  constructor(v1, v2) {
    this.prop1 = v1
    this.prop2 = v2
  }
  prop3() {
    return this.prop1
  }
}

let obj5 = new ObjC("value1", "value2")
console.log(5, obj5)
console.log(obj5.prop3())











