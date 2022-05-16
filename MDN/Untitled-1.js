JSON.stringify()
The JSON.stringify() method converts a JavaScript object or value to a JSON string, optionally replacing values if a replacer function is specified or optionally including only the specified properties if a replacer array is specified.
console.log(JSON.stringify({ x: 5, y: 6 }));
// expected output: "{"x":5,"y":6}"

console.log(JSON.stringify([new Number(3), new String('false'), new Boolean(false)]));
// expected output: "[3,"false",false]"

console.log(JSON.stringify({ x: [10, undefined, function(){}, Symbol('')] }));
// expected output: "{"x":[10,null,null,null]}"

console.log(JSON.stringify(new Date(2006, 0, 2, 15, 4, 5)));
// expected output: ""2006-01-02T15:04:05.000Z""
JSON.stringify(value)
JSON.stringify(value, replacer)
JSON.stringify(value, replacer, space)
JSON.stringify({});                    // '{}'
JSON.stringify(true);                  // 'true'
JSON.stringify('foo');                 // '"foo"'
JSON.stringify([1, 'false', false]);   // '[1,"false",false]'
JSON.stringify([NaN, null, Infinity]); // '[null,null,null]'
JSON.stringify({ x: 5 });              // '{"x":5}'

JSON.stringify(new Date(2006, 0, 2, 15, 4, 5));
// '"2006-01-02T15:04:05.000Z"'

JSON.stringify({ x: 5, y: 6 });
// '{"x":5,"y":6}'
JSON.stringify([new Number(3), new String('false'), new Boolean(false)]);
// '[3,"false",false]'

// String-keyed array elements are not enumerable and make no sense in JSON
let a = ['foo', 'bar'];
a['baz'] = 'quux';      // a: [ 0: 'foo', 1: 'bar', baz: 'quux' ]
JSON.stringify(a);
// '["foo","bar"]'

JSON.stringify({ x: [10, undefined, function() {}, Symbol('')] });
// '{"x":[10,null,null,null]}'

// Standard data structures
JSON.stringify([new Set([1]), new Map([[1, 2]]), new WeakSet([{a: 1}]), new WeakMap([[{a: 1}, 2]])]);
// '[{},{},{},{}]'

// TypedArray
JSON.stringify([new Int8Array([1]), new Int16Array([1]), new Int32Array([1])]);
// '[{"0":1},{"0":1},{"0":1}]'
JSON.stringify([new Uint8Array([1]), new Uint8ClampedArray([1]), new Uint16Array([1]), new Uint32Array([1])]);
// '[{"0":1},{"0":1},{"0":1},{"0":1}]'
JSON.stringify([new Float32Array([1]), new Float64Array([1])]);
// '[{"0":1},{"0":1}]'

// toJSON()
JSON.stringify({ x: 5, y: 6, toJSON(){ return this.x + this.y; } });
// '11'

// Symbols:
JSON.stringify({ x: undefined, y: Object, z: Symbol('') });
// '{}'
JSON.stringify({ [Symbol('foo')]: 'foo' });
// '{}'
JSON.stringify({ [Symbol.for('foo')]: 'foo' }, [Symbol.for('foo')]);
// '{}'
JSON.stringify({ [Symbol.for('foo')]: 'foo' }, function(k, v) {
  if (typeof k === 'symbol') {
    return 'a symbol';
  }
});
// undefined

// Non-enumerable properties:
JSON.stringify( Object.create(null, { x: { value: 'x', enumerable: false }, y: { value: 'y', enumerable: true } }) );
// '{"y":"y"}'

// BigInt values throw
JSON.stringify({x: 2n});
// TypeError: BigInt value can't be serialized in JSON
function replacer(key, value) {
  // Filtering out properties
  if (typeof value === 'string') {
    return undefined;
  }
  return value;
}

var foo = {foundation: 'Mozilla', model: 'box', week: 45, transport: 'car', month: 7};
JSON.stringify(foo, replacer);
// '{"week":45,"month":7}'
JSON.stringify(foo, ['week', 'month']);
// '{"week":45,"month":7}', only keep "week" and "month" properties
JSON.stringify({ a: 2 }, null, ' ');
// '{
//  "a": 2
// }'
JSON.stringify({ uno: 1, dos: 2 }, null, '\t');
// returns the string:
// '{
//     "uno": 1,
//     "dos": 2
// }'
var obj = {
    data: 'data',

    toJSON (key) {
        if (key)
            return `Now I am a nested object under key '${key}'`;
        else
            return this;
    }
};

JSON.stringify(obj);
// '{"data":"data"}'

JSON.stringify({ obj }); // Shorthand property names (ES2015).
// '{"obj":"Now I am a nested object under key 'obj'"}'

JSON.stringify([ obj ]);
// '["Now I am a nested object under key '0'"]'
var a = JSON.stringify({ foo: "bar", baz: "quux" })
//'{"foo":"bar","baz":"quux"}'
var b = JSON.stringify({ baz: "quux", foo: "bar" })
//'{"baz":"quux","foo":"bar"}'
console.log(a !== b) // true

// some memoization functions use JSON.stringify to serialize arguments,
// which may cause a cache miss when encountering the same object like above
// Creating an example of JSON
var session = {
  'screens': [],
  'state': true
};
session.screens.push({ 'name': 'screenA', 'width': 450, 'height': 250 });
session.screens.push({ 'name': 'screenB', 'width': 650, 'height': 350 });
session.screens.push({ 'name': 'screenC', 'width': 750, 'height': 120 });
session.screens.push({ 'name': 'screenD', 'width': 250, 'height': 60 });
session.screens.push({ 'name': 'screenE', 'width': 390, 'height': 120 });
session.screens.push({ 'name': 'screenF', 'width': 1240, 'height': 650 });

// Converting the JSON string with JSON.stringify()
// then saving with localStorage in the name of session
localStorage.setItem('session', JSON.stringify(session));

// Example of how to transform the String generated through
// JSON.stringify() and saved in localStorage in JSON object again
var restoredSession = JSON.parse(localStorage.getItem('session'));

// Now restoredSession variable contains the object that was saved
// in localStorage
console.log(restoredSession);