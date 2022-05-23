/***************************************
Property Descriptors Methods and Usage
Object.defineProperty(obj, propName, {} )
  defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
Object.defineProperties(obj, props)
  defines new or modifies existing properties directly on an object, returning the object.
Object.getOwnPropertyNames(obj)
  returns an array of all properties found directly in a given object.
  properties including non-enumerable properties except for those which use Symbol
Object.getOwnPropertyDescriptor(obj, prop)
  returns an object describing the configuration of a specific property on a given object (that is, one directly present on an object and not in the object's prototype chain). 
  The object returned is mutable but mutating it has no effect on the original property's configuration.
Object.getOwnPropertyDescriptors(obj)
  returns all own property descriptors of a given object.
Object.keys(obj) - list of enumerable properties
  returns an array of a given object's own enumerable property names, iterated in the same order that a normal loop would.
Object.values(obj) - list of enumerable prop values
  returns an array of a given object's own enumerable property values, in the same order as that provided by a for...in loop. 
  (The only difference is that a for...in loop enumerates properties in the prototype chain as well.)
obj.propertyIsEnumerable(prop)
   returns a Boolean indicating whether the specified property is enumerable and is the object's own property.
obj.hasOwnProperty(prop)
  returns a boolean indicating whether the object has the specified property as its own property (as opposed to inheriting it). 

Objects can be
1. Extensible - new properties added
2. Frozen - props cannot be changed in any way
3. Sealed - props can't be deleted or configured
          but are still writable
Object PROPERTIES can be 
1. Writable - change the value
2. Enumerable - seen through a for...in loop
3. Configurable - change the property descriptors
Object.isExtensible(obj)
Object.isFrozen(obj)
Object.isSealed(obj)
Object.preventExtensions(obj)
Object.freeze(obj)
Object.seal(obj)

Descriptor Groups
DATA            ACCESSOR          
value           get
writable        set
configurable    configurable
enumerable      enumerable
****************************************/
let log = console.log;
let obj = {
  name: "Bob",
  age: 45,
};
console.log(obj.name);

Object.defineProperty(obj, "test", {
  value: "Shagadelic",
  writable: true,
  configurable: true,
  enumerable: false,
});

Object.defineProperty(obj, "frank", {
  configurable: true,
  enumerable: true,
  get: () => this.value,
  set: (_val) => {
    this.value = _val + " baby!";
  },
});

for (let prop in obj) {
  log(prop);
}
log(obj, obj.test, obj.frank);
obj.frank = "Shagadelic";
log(obj.frank);
