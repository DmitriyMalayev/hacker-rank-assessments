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
