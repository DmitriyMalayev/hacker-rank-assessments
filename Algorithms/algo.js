// const qu = require("qu");
// // function shapeArea(num) {
// //   let area = 1;

// //   for (let i = 1; i < num; i++) {
// //     area += 4 * i;
// //   }
// //   return area;
// // }

// // shapeArea(3);

// // function makeArrayConsecutive(statues) {
// //   let sortedStatues = statues.sort();
// //   let min = Math.min(...sortedStatues);
// //   let max = Math.max(...sortedStatues);
// //   let count = 0;
// //   for (let i = min; i < max; i++) {
// //     if (sortedStatues.indexOf(i) === -1) {
// //       count++;
// //     }
// //   }
// //   return count;
// // }

// // makeArrayConsecutive([6, 2, 3, 8]);

// // function reverseString(str) {
// //   console.log(str.split("").reverse().join(""))
// // }

// // console.log(reverseString("hello"))

// // function reverseInt(int) {
// //   let newNumber = parseInt(int.toString().split("").reverse().join("")) * Math.sign(int);
// //   return newNumber;
// // }

// // console.log(reverseInt(-123));

// // function maxCharacters(str) {
// //   let charMap = {};
// //   for (let char of str) {
// //     if (charMap[char]) {
// //       charMap[char]++;
// //     } else {
// //       charMap[char] = 1;
// //     }
// //   }

// //   let max = 0;
// //   let maxChar = "";

// //   for (let char in charMap) {
// //     if (charMap[char] > max) {
// //       max = charMap[char];
// //       maxChar = char;
// //     }
// //   }
// //   return maxChar;
// // }

// // console.log(maxCharacters("aaaabbbccddddeee"));

// // function maxCharacters(str) {
// //   let charMap = {};
// //   for (let char of str) {
// //     if (charMap[char]) {
// //       charMap[char]++;
// //     } else {
// //       charMap[char] = 1;
// //     }
// //   }
// //   let max = 0;
// //   let maxChar = "";
// //   for (let char in charMap) {
// //     if (charMap[char] > max) {
// //       max = charMap[char];
// //       maxChar = char;
// //     }
// //   }
// //   return maxChar;
// // }

// // console.log(maxCharacters("aaaaaabbbccddddddeee"));

// // function fizzBuzzer(n) {
// //   for (let i = 0; i <= n; i++) {
// //     if (i % 15 === 0) {
// //       console.log("fizzbuzz");
// //     } else if (i % 3 === 0) {
// //       console.log("fizz");
// //     } else if (i % 5 === 0) {
// //       console.log("buzz");
// //     } else {
// //       console.log(i);
// //     }
// //   }
// // }

// // console.log(fizzBuzzer(8))

// // function chunk(ar, num) {
// //   const chunked = [];
// //   for (let elem of ar) {
// //     let last = chunked[chunked.length -1]
// //     if (!last || last.length === num) {
// //       chunked.push([elem]);
// //     } else {
// //       last.push(elem);
// //     }
// //   }
// //   return chunked;
// // }

// // function chunk(ar, num) {
// //   const chunked = []
// //   for (let elem of ar) {
// //     let last = chunked[chunked.length - 1]
// //     if (!last || last.length === num) {
// //       chunked.push([elem])
// //     } else {
// //       last.push(elem)
// //     }
// //   }
// //   return chunked
// // }

// // function chunk2(arr, num) {
// //   const chunked = [];
// //   let index = 0;
// //   while (index < arr.length) {
// //     chunked.push(arr.slice(index, index + num));
// //     index += num;
// //   }
// //   return chunked;
// // }

// // function chunk2(arr, size) {
// //   let chunked = [];
// //   let index = 0;

// //   while (index < arr.length) {
// //     chunked.push(arr.slice(index, index + size));
// //     index += size;
// //   }
// //   return chunked;
// // }

// // console.log(chunk2([1, 2, 3, 4], 2));

// // function anagramChecker(str1, str2) {
// //   console.log(helperString(str1) === helperString(str2));
// // }

// // function helperString(str) {
// //   str.replace(/[^\w]/g, "").toLowerCase().split("").join("");
// // }
// // console.log("Hello".replace(/[^\w]/g, "").toLowerCase().split("").sort().join());
// // console.log(anagramChecker("Hello", "hello"));
// // console.log("Hello".replace(/[^\w]/)
// // anagramChecker("Hello", "hello")

// // function anagramChecker2(str1, str2) {
// //   const charMap1 = {};
// //   const charMap2 = {};

// //   for (let char of str1.toLowerCase()) {
// //     if (charMap1[char]) {
// //       charMap1[char]++;
// //     } else {
// //       charMap1[char] = 1;
// //     }
// //   }

// //   for (let char of str2.toLowerCase()) {
// //     if (charMap2[char]) {
// //       charMap2[char]++;
// //     } else {
// //       charMap2[char] = 1;
// //     }
// //   }
// //   // console.log(charMap1)
// //   // console.log(charMap2)

// //   for (let char in charMap1.toLowerCase) {
// //     if (charMap1[char] !== charMap2[char]) {
// //       return false;
// //     }
// //   }
// //   return true
// // charMap1 === charMap2
// // return charMap;
// // }

// // console.log(anagramChecker2("earth", "heart"));
// // let freqCount1 = {};
// // let freqCount2 = {};

// // We first make convert our arrays to objects  {number: frequency}
// // for (let val of arr1) {
// //   freqCount1[val] = (freqCount1[val] || 0) + 1;
// //   console.log(freqCount1);
// // }

// // function anagramChecker2(str1, str2) {
// //   charMap1 = {}
// //   charMap2 = {}

// //   for (let char of str1) {
// //     if (charMap1[char]) {
// //       charMap1[char]++
// //     } else {
// //       charMap1[char] = 1
// //     }
// //   }

// //   for (let char of str2) {
// //     if (charMap2[char]) {
// //       charMap2[char] ++
// //     } else {
// //       charMap2[char] = 1
// //     }
// //   }
// //   // if (Object.keys(charMap1) !== Object.keys(charMap2)) {
// //   //   return false
// //   // }

// //   for (let char in charMap2) {
// //     if (charMap2[char] !== charMap1[char]) {
// //       return false
// //     }
// //   }
// //   return true
// // }
// //   // for (let char of str2) {
// //   //     if (charMap2[char]) {
// //   //       charMap2[char] ++
// //   //     } else {
// //   //       charMap2[char] = 1
// //   //     }
// //   //   }
// //   //   return charMap2
// //   // }

// // console.log(anagramChecker2("earth", "heart"));

// // forEach: This iterates over a list and applies some operation with side effects to each list member (example: saving every list item to the database) and does not return anything.

// // map: This iterates over a list, transforms each member of that list, and returns another list of the same size with the transformed members (example: transforming list of strings to uppercase). It does not mutate the array on which it is called (although the callback function may do so).

// // function capitalizedWords(str) {
// //   let newStr = str
// //     .split(" ")
// //     .map((a) => a.charAt(0).toUpperCase() + a.substring(1))
// //     .join(" ");

// //   return newStr;
// // }

// // function capitalizedWords(str) {
// //   return str
// //     .split(" ")
// //     .map((str) => str[0].toUpperCase() + str.substring(1))
// //     .join(" ");
// // }

// // console.log(capitalizedWords("Are you prepared for algorithms?"));

// // function simpleArraySum(ar) {
// //   return ar.reduce((a,b) => a + b, 0)
// // }

// // function simpleArraySum2(arr) {
// //   let sum = 0
// //   for (let num of arr) {
// //     sum+= num
// //   }
// //   return sum
// // }

// // console.log(simpleArraySum([1, 2, 3]))

// // function compareTriplets(a, b) {
// //   let scores = [0, 0];
// //   for (let i = 0; i < a.length; i++) {
// //     if (a[i] > b[i]) {
// //       scores[0]++;
// //     } else {
// //       scores[1]++;
// //     }
// //   }
// //   return scores;
// // }

// // console.log(compareTriplets([1, 5, 3], [3, 2, 1]));

// // function printNumber(num) {
// //   if (num === 0) {
// //     return;
// //   }
// //   console.log(n);
// //   printNumber(n - 1);
// // }

// // printNumber(10);

// // function stepsMaker(num) {
// //   for (let row = 0; row < num; row++) {
// //     let stair = ""

// //     for (let column = 0; column < num; column++) {
// //       if (column <= row) {
// //         stair += "#"
// //       } else {
// //         stair += " "
// //       }
// //     }
// //     console.log(stair)
// //   }
// // }

// // function steps(num, row = 0, stair = "") {
// //   if (num === row) {
// //     return;
// //   }
// //   if (num === stair.length) {
// //     console.log(stair);
// //     return steps(num, row + 1, "");
// //     // We need to increment row when we hit the end of the row.
// //   }
// //   if (stair.length <= row) {
// //     stair += "#";
// //   } else {
// //     stair += " ";
// //   }
// //   steps(num, row, stair);
// //   //makes sure to restart the process and do recursion through a row as well.
// // }

// // function steps(num, row = 0, stair = "") {
// //   if (num === row) {
// //     return;
// //   }
// //   if (num === stair.length) {
// //     console.log(stair);
// //     steps(num, row + 1, "");
// //   }
// //   if (stair <= row) {
// //     stair += "#";
// //   } else {
// //     stair += " ";
// //   }
// //   stair(num, row, stair);
// // }

// // console.log(steps(3));

// // function pyramidBuilder(n) {
// //   let midpoint = Math.floor((n * 2 - 1) / 2);
// //   for (let row = 0; row < n; row++) {
// //     let level = "";
// //     for (let column = 0; column < 2 * n - 1; column++) {
// //       if (midpoint - row <= column && midpoint + row >= column) {
// //         level += "#";
// //       } else {
// //         level += " ";
// //       }
// //     }
// //     console.log(level);
// //   }
// // }
// // console.log(pyramidBuilder(3));

// // let columns = [0, 1, 2, 3, 4]
// // We calculate the midpoint of our array.Then we take row number of elements on either side of the midpoint and make them into #
// // let row = 0

// // function pyramid(n, row = 0, level = "") {
// //   if (row === n) {
// //     return;
// //   }

// //   if (level.length === 2 * n - 1) {
// //     console.log(level);
// //     return pyramid(n, row + 1);
// //   }

// //   const midpoint = Math.floor((2 * n - 1) / 2);
// //   let add;
// //   if (midpoint - row <= level.length && midpoint + row >= level.length) {
// //     add = "#";
// //   } else {
// //     add = " ";
// //   }
// //   pyramid(n, row, level + add);
// // }
// // console.log(pyramid(3));

// // function howManyVowels(str) {
// //   let count = 0;
// //   let checker = ["a", "e", "i", "o", "u"];

// //   for (let char of str.toLowerCase()) {
// //     if (checker.includes(char)) {
// //       count += 1;
// //     }
// //   }
// //   return count;
// // }

// // function howManyVowels2(str) {
// //   let matches = str.match(/[aeiou]/gi);
// //   return matches ? matches.length : 0;
// // }

// // console.log(howManyVowels("aeiou"));
// // console.log(howManyVowels2("aeiou"));

// // function matrix(n) {
// //   const results = [];
// //   for (i = 0; i < n; i++) {
// //     results.push([]);
// //   }

// //   let counter = 1;
// //   let startColumn = 0;
// //   let startRow = 0;
// //   let endColumn = n - 1;
// //   let endRow = n - 1;

// //   while (startColumn <= endColumn && startRow <= endRow) {
// //     for (let i = startColumn; i <= endColumn; i++) {
// //       results[startRow][i] = counter;
// //       counter++;
// //     }
// //     startRow++;
// //     for (let i = startRow; i <= endRow; i++) {
// //       results[i][endColumn] = counter;
// //       counter++;
// //     }
// //     endColumn--;
// //     for (let i = endColumn; i >= startColumn; i--) {
// //       results[endRow][i] = counter;
// //       counter++;
// //     }
// //     endRow--;

// //     for (let i = endRow; i >= startRow; i--) {
// //       results[i][startColumn] = counter;
// //       counter++;
// //     }
// //     startColumn++;
// //   }
// //   return results;
// // }
// // console.log(matrix(3));

// // function fib(n) {
// //   const result = [0, 1];

// //   for (let i = 2; i <= n; i++) {
// //     result.push([i - 1 + i - 2]);
// //   }
// //   return result.flat()[n];
// // }
// // console.log(fib(5));

// // function memoize(fn) {
// //   const cache = {};

// //   return function (...args) {
// //     if (cache[args]) {
// //       return cache[args];
// //     }
// //     const result = fn.apply(this, args);
// //     cache[args] = result;
// //     return result;
// //   };
// // }

// // function slowFib(n) {
// //   if (n < 2) {
// //     return n;
// //   }

// //   return fib(n - 1) + fib(n - 2);
// // }

// // const fib = memoize(slowFib);

// // console.log(fib(5));

// // class Queue {
// //   constructor() {
// //     this.data = [];
// //   }

// //   add(record) {
// //     this.data.unshift(record);
// //   }
// //   remove() {
// //     return this.data.pop()
// //   }
// // }

// // class Queue {
// //   constructor() {
// //     this.data = [];
// //   }

// //   add(record) {
// //     this.data.unshift(record)
// //   }

// //   peek() {
// //    return this.data[data.length -1]
// //   }
// // }

// // class Queue {
// //   constructor() {
// //     this.data = [];
// //   }

// //   add(record) {
// //     this.data.unshift(record);
// //   }

// //   remove() {
// //     return this.data.pop();
// //   }

// //   peek() {
// //     return this.data[this.data.length - 1];
// //     // this.data[data.length - 1];
// //     // return answer;
// //   }
// // }

// // const q = new Queue();
// // q.add(1);
// // q.add(2);
// // q.peek();
// // console.log(q)
// // console.log(q.data)

// // class Queue {
// //   constructor() {
// //     this.data = [];
// //   }
// //   add(record) {
// //     this.data.unshift(record);
// //   }
// //   remove() {
// //     return this.data.pop();
// //   }
// //   peek() {
// //     return this.data[this.data.length - 1];
// //   }
// // }

// // function weave(sourceOne, sourceTwo) {
// //   const queueThree = new Queue();

// //   while (sourceOne.peek() || sourceTwo.peek()) {
// //     if (sourceOne.peek()) {
// //       queueThree.add(sourceOne.remove());
// //     }
// //     if (sourceTwo.peek()) {
// //       queueThree.add(sourceTwo.remove());
// //     }
// //   }
// //   return queueThree;
// // }

// // const queueOne = new Queue();
// // queueOne.add(1);
// // queueOne.add(2);

// // const queueTwo = new Queue();
// // queueTwo.add("Hello");
// // queueTwo.add("There");

// // weave(queueOne, queueTwo);

// // console.log(queueThree);
// // console.log(weave(queueOne, queueTwo));
// // const q = weave(queueOne, queueTwo);
// // console.log(queueThree);
// // console.log(queueOne, queueTwo);

// //  QUEUE FROM STACK

// // class Queue {
// //   constructor() {
// //     this.first = new Stack();
// //     this.second = new Stack();
// //   }
// //   add(record) {
// //     this.first.push(record);
// //   }
// //   peek() {
// //     while (this.first.peek()) {
// //       this.second.push(this.first.pop());
// //     }
// //     const record = this.second.peek();
// //     while (this.second.peek()) {
// //       this.first.push(this.second.pop());
// //     }
// //     return record;
// //   }
// //   remove() {
// //     while (this.first.peek()) {
// //       this.second.add(this.first.pop());
// //     }
// //     const record = this.second.pop();

// //     while (this.second.peek()) {
// //       this.first.add(this.second.pop());
// //     }
// //     return record;
// //   }
// // }

// //   while (sourceOne.peek() || sourceTwo.peek()) {
// //     if (sourceOne.peek()) {
// //       queueThree.add(sourceOne.remove());
// //     }
// //     if (sourceTwo.peek()) {
// //       queueThree.add(sourceTwo.remove());
// //     }
// //   }
// //   return queueThree;
// // }

// // LINKED LISTS

// // const nodeOne = {
// //   data: 123
// // }

// // const nodeTwo = {
// //   data: 456
// // }

// // nodeOne.next = nodeTwo

// class Node {
//   constructor(data, next = null) {
//     this.data = data;
//     this.next = next;
//   }
// }
// class LinkedList {
//   constructor() {
//     this.head = null;
//   }
//   insertFirst(data) {
//     this.head = new Node(data, this.head);
//   }
//   size() {
//     let counter = 0;
//     let node = this.head;
//     while (node) {
//       counter++;
//       node = node.next;
//     }
//     return counter;
//   }
//   getFirst() {
//     return this.head;
//   }
//   getLast() {
//     if (!this.head) {
//       return null;
//     }
//     let node = this.head;
//     while (node) {
//       if (!node.next) {
//         return node;
//       }
//       node = node.next;
//     }
//   }
//   clear() {
//     return (this.head = 0);
//   }

//   removeFirst() {
//     if (!this.head) {
//       return null;
//     }
//     return (this.head = this.head.next);
//   }
//   removeLast() {
//     if (!this.head) {
//       return;
//     }
//     if (!this.head.next) {
//       this.head = null;
//       return;
//     }
//     let previous = this.head;
//     let node = this.head.next;
//     // console.log(node)
//     // console.log(node.next)

//     while (node.next) {
//       previous = node;
//       node = node.next;
//     }
//     previous.next = null;
//   }
//   insertLast(data) {
//     const last = getLast();
//     if (last) {
//       last.next = new Node(data);
//     } else {
//       this.head = new Node(data);
//     }
//   }

//   getAt(index) {
//     let counter = 0;
//     let node = this.head;
//     while (node) {
//       if (counter === index) {
//         return node;
//       } else {
//         node = node.next;
//         counter++;
//       }
//     }
//     return null;
//   }

//   removeAt(index) {
//     if (this.head) {
//       return;
//     }
//     if (index === 0) {
//       this.head = this.head.next;
//       return;
//     }
//     const previous = this.getAt(index - 1);
//     if (!previous || !previous.next) {
//       return;
//     }
//     previous.next = previous.next.next;
//   }

//   insertAt(data, index) {
//     if (!this.head) {
//       this.head = new Node(data);
//     }
//     if (index === 0) {
//       this.head = new Node(data, this.head);
//     }
//     const previous = this.getAt(index - 1) || this.getLast();
//     const node = new Node(data, previous.next);
//     previous.next = node;
//   }
// }
// function midpoint(list) {
//   let slow = list.getFirst();
//   let fast = list.getFirst();

//   while (fast.next && fast.next.next) {
//     slow = slow.next;
//     fast = fast.next.next;
//   }
//   return slow;
// }
// midpoint();

// function circular(list) {
//   let slow = list.getFirst();
//   let fast = list.getFirst();

//   while (fast.next && fast.next.next) {
//     slow = slow.next;
//     fast = fast.next.next;

//     if (slow === fast) {
//       return true;
//     }
//   }
//   return false;
// }
// circular();

// function fromLast(list, n) {
//   let slow = list.getFirst();
//   let fast = list.getFirst();

//   while (n > 0) {
//     fast = fast.next
//     n--
//   }
//   while (fast.next) {
//     slow = slow.next
//     fast = fast.next
//   }
//   return slow
// }

/*
Create a node class. The constructor should accept an argument that gets assigned 
to the data property and initialize an empty array for storing children. 
The node class should have methods "add" and "remove". 

Create a tree class. The three constructor should initialize a "root" property set to null. 
Implement a "traverseBFS" and "traverseDFS" method on the tree class. 
*/

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
  add(data) {
    this.children.push(new Node(data));
  }
  remove(data) {
    this.children.filter((n) => {
      return n.data !== data;
    });
  }
}

class Tree {
  constructor() {
    this.root = null;
  }
  traverseBF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      arr.push(...node.children);
      fn(node);
    }
  }
  traverseDF(fn) {
    const arr = [this.root];
    while (arr.length) {
      const node = arr.shift();
      arr.unshift(...node.children);
      fn(node);
    }
  }
}

/*
Given the root node of a tree, 
return an array where each element is the width 
of the tree at each level. 
*/

function levelWidth(root) {
  let newArray = [root, "s"];
  let counters = [0];

  while (arr.length > 1) {
    const node = newArray.shift();
    if (node === "s") {
      counters.push(0);
      newArray.push("s");
    } else {
      newArray.push(...node.children);
      counters[counters.length - 1]++;
    }
  }
  return counters;
}

/*
Implement the Node class to create a Binary Search tree.
The constructor should initialize with the values "data", "left", and "right".
Implement the "insert" method on the Node class. 
Insert should accept an argument "data" and then create an insert a new node at 
the appropriate location in the tree. 
*/

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this;
    }
  }
  /*
  Implement a contains method that accepts "data" as an argument and returns the entire node in the tree with the same value. 
  If it doesn't find it, return null.  
  */

  contains(data) {
    if (this.data === data) {
      return this;
    }
    if (this.data < data && this.right) {
      return this.right.contains(data);
    } else if (this.data > data && this.left) {
      return this.left.contains(data);
    }
    return null;
  }
}

/*
Ensure that every node's left hand child is less than the parent node's value
Ensure that every node's right hand child is greater than the parent node's value
*/

function validate(node, min = null, max = null) {
  if (max !== null && node.data > max) {
    return false;
  }
  if (min !== null && node.data < min) {
    return false;
  }

  if (node.left && !validate(node.left, min, node.data)) {
    return false;
  }
  if (node.right && !validate(node.right, node.data, max)) {
    return false;
  }
  return true;
}

// Custom Eventing Library
class Events {
  constructor() {
    this.events = {};
  } //Register an event handler
  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events.eventName = [callback];
    }
  }
  // Trigger all callbacks associated with a given eventName
  trigger(eventName) {
    if (this.events[eventName]) {
      for (let cb of this.events[eventName]) {
        cb();
      }
    }
  }
  off(eventName) {
    delete this.events[eventName];
  }
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let centerIndex = Math.floor(arr.length / 2);
  let left = arr.slice(0, centerIndex);
  let right = arr.slice(centerIndex);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let results = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  return [...results, ...left, ...right];
}

function sameSlow(arr1, arr2) {
  //Quadratic Time N ^ 2
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2); //indexOf is also a loop
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1); //removes the value that's found
  }
}
console.log(sameSlow([1, 2, 3, 2], [9, 1, 4, 4]));

// Linear Time O(n)
//Making an object with how many numbers each number occurs
function sameFast(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let freqCounter1 = {};
  let freqCounter2 = {};

  for (let val of arr1) {
    freqCounter1[val] = (freqCounter1[val] || 0) + 1;
  }

  for (let val of arr2) {
    freqCounter2[val] = (freqCounter2[val] || 0) + 1;
  }

  for (let key in freqCounter1) {
    if (!(key ** 2 in freqCounter2)) {
      return false;
    }
    if (freqCounter2[key ** 2] !== freqCounter1[key]) {
      return false;
    }
  }
  return true;
}
console.log(sameFast([1, 2, 2, 3, 2, 5], [9, 1, 4, 4, 11, 5]));

function validAnagram(word1, word2) {
  if (word1.length !== word2.length) {
    return false;
  }
  let freqCount1 = {};
  let freqCount2 = {};

  for (let char of word1) {
    freqCount1[char] = (freqCount1[char] || 0) + 1;
    freqCount1;
  }

  for (let char of word2) {
    freqCount2[char] = (freqCount2[char] || 0) + 1;
  }

  for (let key in freqCount1) {
    if (!key in freqCount2) {
      return false;
    }
    if (freqCount1[key] !== freqCount2[key]) {
      return false;
    }
  }
  // return (
  //   freqCount1.keys === freqCount2.keys &&
  //   freqCount1.values === freqCount2.values
  // );
  return true;
}
console.log(validAnagram("anagram", "nagaram"));

function validAnagram2(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};
  for (let i = 0; i < first.length; i++) {
    lookup[first[i]] ? (lookup[first[i]] += 1) : (lookup[first[i]] = 1);
  }
  for (let i = 0; i < second.length; i++) {
    if (!lookup[second[i]]) {
      return false;
    } else {
      lookup[second[i]] -= 1;
    }
    console.log(lookup);
  }
  return true;
}

console.log(validAnagram2("anagram", "nagaram"));
function sumZeroSlow(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
console.log(sumZeroSlow([-4, -3, -2, -1, 0, 1, 2, 5]));

function sumZeroFast(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    //fail safe to prevent 0 - 0   NOT left <= right
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
console.log(sumZeroFast([-4, -3, -2, -1, 0, 1, 2, 5]));

function countUniqueValues(arr) {
  return Array.from(new Set(arr)).length;
}

function countUniqueValues2(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

console.log(countUniqueValues2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));

function maxSubArraySumSlow(arr, num) {
  if (num > arr.length) {
    return null;
  }
  let max = -Infinity;
  //accounts for the case in which we have all negative numbers. The biggest sum will still be negative.
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}
//We first add the first three values in the array (if num = 3)
//We compare by moving the window, subtracting the first element and adding the next element.
//In the for loop the initialization of i only occurs once
//
function maxSubArraySumFast(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (num > arr.length) {
    return null;
  }
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubArraySumFast([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

function addStrings(num1, num2) {
  if (num2.length > num1.length) {
    return addStrings(num2, num1);
  }
  let i = num1.length - 1;
  let j = num2.length - 1;
  let out = "";
  let carry = 0;

  while (i >= 0) {
    let digit1 = num1.charAt(i) - "0";
    let digit2 = j < 0 ? 0 : num2.charAt(j) - "0";
    let sum = carry + digit1 + digit2;
    carry = 0;

    if (sum > 9) {
      carry = 1;
      sum %= 10;
    }
    out = `${sum.toString()}${out}`;
    i -= 1;
    j -= 1;
  }
  if (carry > 0) {
    out = `${carry.toString()}${out}`;
  }
  return out;
}

console.log(addStrings("897", "9875"));

function averagePair(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  let sum = 0;
  let total = target * 2;

  while (left < right) {
    sum = arr[left] + arr[right];
    if (sum === total) {
      return true;
    } else if (sum > total) {
      right--;
    } else {
      left++;
    }
    sum = 0;
  }
  return false;
}

console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8));

var numTilePossibilities = function (tiles) {
  let map = {};
  for (let i of tiles) {
    if (map[i]) {
      map[i]++;
    } else {
      map[i] = 1;
    }
  }
  function sequence(hash) {
    let sum = 0;
    for (let i in hash) {
      if (map[i] == 0) {
        continue;
      }
      sum++;
      map[i]--;
      sum += sequence(map);
      map[i]++;
    }
    return sum;
  }

  return sequence(map);
};
console.log(numTilePossibilities("AAB"));

// SOLUTIONS PART 2
// averagePair Solution
function averagePair(arr, num) {
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === num) return true;
    else if (avg < num) start++;
    else end--;
  }
  return false;
}
// isSubsequence Solution - Iterative
function isSubsequence(str1, str2) {
  var i = 0;
  var j = 0;
  if (!str1) return true;
  while (j < str2.length) {
    if (str2[j] === str1[i]) i++;
    if (i === str1.length) return true;
    j++;
  }
  return false;
}
// isSubsequence Solution - Recursive but not O(1) Space
function isSubsequence(str1, str2) {
  if (str1.length === 0) return true;
  if (str2.length === 0) return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
}

// Given an array of integers and a number write a function called maxArraySum
function maxSubarraySum(arr, num) {
  if (arr.length < num) {
    return null;
  }
  let total = 0;

  for (let i = 0; i < num; i++) {
    total += arr[i];
  }

  let currentTotal = total;

  // i = num, num = 2, arr.length = 7.
  // currentTotal += arr[2] - arr[2-2] same as arr[0]
  for (let i = num; i < arr.length; i++) {
    console.log(currentTotal);
    currentTotal += arr[i] - arr[i - num];
    total = Math.max(total, currentTotal);
  }
  return total;
}

console.log(maxSubarraySum([100, 200, 500, 400, 600], 2));
