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

// function chunk(ar, num) {
//   const chunked = [];
//   for (let elem of ar) {
//     let last = chunked[chunked.length -1]
//     if (!last || last.length === num) {
//       chunked.push([elem]);
//     } else {
//       last.push(elem);
//     }
//   }
//   return chunked;
// }

// function chunk(ar, num) {
//   const chunked = []
//   for (let elem of ar) {
//     let last = chunked[chunked.length - 1]
//     if (!last || last.length === num) {
//       chunked.push([elem])
//     } else {
//       last.push(elem)
//     }
//   }
//   return chunked
// }

// function chunk2(arr, num) {
//   const chunked = [];
//   let index = 0;
//   while (index < arr.length) {
//     chunked.push(arr.slice(index, index + num));
//     index += num;
//   }
//   return chunked;
// }

// function chunk2(arr, size) {
//   let chunked = [];
//   let index = 0;

//   while (index < arr.length) {
//     chunked.push(arr.slice(index, index + size));
//     index += size;
//   }
//   return chunked;
// }

// console.log(chunk2([1, 2, 3, 4], 2));

// function anagramChecker(str1, str2) {
//   console.log(helperString(str1) === helperString(str2));
// }

// function helperString(str) {
//   str.replace(/[^\w]/g, "").toLowerCase().split("").join("");
// }
// console.log("Hello".replace(/[^\w]/g, "").toLowerCase().split("").sort().join());
// console.log(anagramChecker("Hello", "hello"));
// console.log("Hello".replace(/[^\w]/)
// anagramChecker("Hello", "hello")

// function anagramChecker2(str1, str2) {
//   const charMap1 = {};
//   const charMap2 = {};

//   for (let char of str1.toLowerCase()) {
//     if (charMap1[char]) {
//       charMap1[char]++;
//     } else {
//       charMap1[char] = 1;
//     }
//   }

//   for (let char of str2.toLowerCase()) {
//     if (charMap2[char]) {
//       charMap2[char]++;
//     } else {
//       charMap2[char] = 1;
//     }
//   }
//   // console.log(charMap1)
//   // console.log(charMap2)

//   for (let char in charMap1.toLowerCase) {
//     if (charMap1[char] !== charMap2[char]) {
//       return false;
//     }
//   }
//   return true
// charMap1 === charMap2
// return charMap;
// }

// console.log(anagramChecker2("earth", "heart"));
// let freqCount1 = {};
// let freqCount2 = {};

// We first make convert our arrays to objects  {number: frequency}
// for (let val of arr1) {
//   freqCount1[val] = (freqCount1[val] || 0) + 1;
//   console.log(freqCount1);
// }

// function anagramChecker2(str1, str2) {
//   charMap1 = {}
//   charMap2 = {}

//   for (let char of str1) {
//     if (charMap1[char]) {
//       charMap1[char]++
//     } else {
//       charMap1[char] = 1
//     }
//   }

//   for (let char of str2) {
//     if (charMap2[char]) {
//       charMap2[char] ++
//     } else {
//       charMap2[char] = 1
//     }
//   }
//   // if (Object.keys(charMap1) !== Object.keys(charMap2)) {
//   //   return false
//   // }

//   for (let char in charMap2) {
//     if (charMap2[char] !== charMap1[char]) {
//       return false
//     }
//   }
//   return true
// }
//   // for (let char of str2) {
//   //     if (charMap2[char]) {
//   //       charMap2[char] ++
//   //     } else {
//   //       charMap2[char] = 1
//   //     }
//   //   }
//   //   return charMap2
//   // }

// console.log(anagramChecker2("earth", "heart"));

// forEach: This iterates over a list and applies some operation with side effects to each list member (example: saving every list item to the database) and does not return anything.

// map: This iterates over a list, transforms each member of that list, and returns another list of the same size with the transformed members (example: transforming list of strings to uppercase). It does not mutate the array on which it is called (although the callback function may do so).

// function capitalizedWords(str) {
//   let newStr = str
//     .split(" ")
//     .map((a) => a.charAt(0).toUpperCase() + a.substring(1))
//     .join(" ");

//   return newStr;
// }

// function capitalizedWords(str) {
//   return str
//     .split(" ")
//     .map((str) => str[0].toUpperCase() + str.substring(1))
//     .join(" ");
// }

// console.log(capitalizedWords("Are you prepared for algorithms?"));

// function simpleArraySum(ar) {
//   return ar.reduce((a,b) => a + b, 0)
// }

// function simpleArraySum2(arr) {
//   let sum = 0
//   for (let num of arr) {
//     sum+= num
//   }
//   return sum
// }

// console.log(simpleArraySum([1, 2, 3]))

// function compareTriplets(a, b) {
//   let scores = [0, 0];
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] > b[i]) {
//       scores[0]++;
//     } else {
//       scores[1]++;
//     }
//   }
//   return scores;
// }

// console.log(compareTriplets([1, 5, 3], [3, 2, 1]));

// function printNumber(num) {
//   if (num === 0) {
//     return;
//   }
//   console.log(n);
//   printNumber(n - 1);
// }

// printNumber(10);

// function stepsMaker(num) {
//   for (let row = 0; row < num; row++) {
//     let stair = ""

//     for (let column = 0; column < num; column++) {
//       if (column <= row) {
//         stair += "#"
//       } else {
//         stair += " "
//       }
//     }
//     console.log(stair)
//   }
// }

// function steps(num, row = 0, stair = "") {
//   if (num === row) {
//     return;
//   }
//   if (num === stair.length) {
//     console.log(stair);
//     return steps(num, row + 1, "");
//     // We need to increment row when we hit the end of the row.
//   }
//   if (stair.length <= row) {
//     stair += "#";
//   } else {
//     stair += " ";
//   }
//   steps(num, row, stair);
//   //makes sure to restart the process and do recursion through a row as well.
// }

function steps(num, row = 0, stair = "") {
  if (num === row) {
    return;
  }
  if (num === stair.length) {
    console.log(stair);
    steps(num, row + 1, "");
  }
  if (stair <= row) {
    stair += "#";
  } else {
    stair += " ";
  }
  stair(num, row, stair);
}

console.log(steps(3));