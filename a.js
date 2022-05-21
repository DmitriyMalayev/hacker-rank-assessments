function test() {
  "use strict";

  let obj1 = { a: 0, b: { c: 0 } };
  let obj2 = Object.assign({}, obj1);
  console.log(JSON.stringify(obj2));
  console.log(obj2);

  obj1.a = 1;
  console.log(JSON.stringify(obj1));
  console.log(JSON.stringify(obj2));

  obj2.a = 3;
  console.log(JSON.stringify(obj1));
  console.log(JSON.stringify(obj2));

  // obj2.b.c = 3;
  console.log(JSON.stringify(obj1));
  console.log(JSON.stringify(obj2));

  // Deep Clone
  obj1 = { a: 0, b: { c: 0 } };
  let obj3 = JSON.parse(JSON.stringify(obj1));
  obj1.a = 4;
  obj1.b.c = 4;
  console.log(obj2);
  console.log(JSON.stringify(obj3));
}

test();
