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

// function reverseInt(int) {
//   let newNumber = parseInt(int.toString().split("").reverse().join("")) * Math.sign(int);
//   return newNumber;
// }

// console.log(reverseInt(-123));

// function maxCharacters(str) {
//   let charMap = {};
//   for (let char of str) {
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   }

//   let max = 0;
//   let maxChar = "";

//   for (let char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char];
//       maxChar = char;
//     }
//   }
//   return maxChar;
// }

// console.log(maxCharacters("aaaabbbccddddeee"));

// function maxCharacters(str) {
//   let charMap = {};
//   for (let char of str) {
//     if (charMap[char]) {
//       charMap[char]++;
//     } else {
//       charMap[char] = 1;
//     }
//   }
//   let max = 0;
//   let maxChar = "";
//   for (let char in charMap) {
//     if (charMap[char] > max) {
//       max = charMap[char];
//       maxChar = char;
//     }
//   }
//   return maxChar;
// }

// console.log(maxCharacters("aaaaaabbbccddddddeee"));

// function fizzBuzzer(n) {
//   for (let i = 0; i <= n; i++) {
//     if (i % 15 === 0) {
//       console.log("fizzbuzz");
//     } else if (i % 3 === 0) {
//       console.log("fizz");
//     } else if (i % 5 === 0) {
//       console.log("buzz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// console.log(fizzBuzzer(8))


