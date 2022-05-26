// function shapeArea(num) {
//   let area = 1;

//   for (let i = 1; i < num; i++) {
//     area += 4 * i;
//   }
//   return area;
// }

// shapeArea(3);

// function makeArrayConsecutive(statues) {
//   let sortedStatues = statues.sort();
//   let min = Math.min(...sortedStatues);
//   let max = Math.max(...sortedStatues);
//   let count = 0;
//   for (let i = min; i < max; i++) {
//     if (sortedStatues.indexOf(i) === -1) {
//       count++;
//     }
//   }
//   return count;
// }

// makeArrayConsecutive([6, 2, 3, 8]);

// function reverseString(str) {
//   console.log(str.split("").reverse().join(""))
// }

// console.log(reverseString("hello"))

function reverseInt(int) {
  let newNumber = parseInt(int.toString().split("").reverse().join("")) * Math.sign(int);
  return newNumber;
}

console.log(reverseInt(-123));
