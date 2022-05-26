const jsonObject = '{"result":true, "count":42}';
const jsObject = { result: true, count: 42 };

const toObject = JSON.parse(jsonObject);
const toJSON = JSON.stringify(jsonObject);

console.log(toObject);

console.log(toJSON);
