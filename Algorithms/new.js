// // Divide an Conquer
// // search takes in a sorted array and a value. Returns the index where the value is or returns -1.

// function searchSlow(arr, value) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value) {
//       return i;
//     }
//   }
//   return -1;
// }

// function searchFast1(arr, value) {
//   return arr.findIndex((v) => v === value);
// }

// function searchFast2(arr, value) {
//   let min = 0;
//   let max = array.length - 1;

//   while (min <= max) {
//     let middle = Math.floor((min + max) / 2);
//     let currentElement = arr[middle];
//     if (arr[middle] < value) {
//       min = middle + 1;
//     } else if (array[middle] > value) {
//       max = middle - 1;
//     } else {
//       return middle;
//     }
//   }
//   return -1;
// }

// console.log(searchSlow([1, 2, 3]))
// console.log(searchSlow(arr.findIndex((v => v === value))))

// function sameFrequency(first, second) {
//   let freqCounter1 = {};
//   let freqCounter2 = {};

//   for (let num of first.toString()) {
//     if (freqCounter1[num]) {
//       freqCounter1[num] += 1;
//     } else {
//       freqCounter1[num] = 1;
//     }
//   }
//   for (let num of second.toString()) {
//     if (freqCounter2[num]) {
//       freqCounter2[num] += 1;
//     } else {
//       freqCounter2[num] = 1;
//     }
//   }

//     return JSON.stringify(freqCounter1) === JSON.stringify(freqCounter2)
// }

// console.log(sameFrequency(123, 321));

function areThereDuplicates(...args) {
  let freqCounter = {}
  for (let char of args){
    if (freqCounter[char]){
      freqCounter[char] += 1
      return true
    } else {
      freqCounter[char] = 1
    }
  }
  return false
}

console.log(areThereDuplicates(1, 2, 3, 3, "a"));
