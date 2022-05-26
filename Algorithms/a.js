/****************************
What is a Polyfill
How to create a Polyfill
NOT recommended on DOM Objects
Array - justLetter - only keep 
    Strings with a specific letter
    
Date - f$$kinDay - return the day
    of the week with prefix
****************************/
let log = console.log;

if (!Array.prototype.sort) {
  log("sort does not exist");
}

// When we want to refer to the array that calls the method we use "this."
if (!Array.prototype.justLetter) {
  //log('justLetter method missing')
  Array.prototype.justLetter = function (letter) {
    //can't use Arrow Function
    let arr = this.filter((item) => {
      //can use Arrow Function
      if (typeof item != "string") return false;
      return item.indexOf(letter) > -1;
    });
    return arr;
  };
} 
let names =  ["abc", "def", { a: 1 }, "cab", "dac", 123];
console.log(names);
console.log(names.justLetter("d"));

if (!Date.prototype.f$$kinDay) {
  //log('f$$kinDay method missing')
  Date.prototype.f$$kinDay = function () {
    switch (this.getDay()) {
      case 0:
        return "Today is f$$ckin Sunday";
      case 1:
        return "Today is f$$ckin Monday";
      case 2:
        return "Today is f$$ckin Tuesday";
      case 3:
        return "Today is f$$ckin Wednesday";
      case 4:
        return "Today is f$$ckin Thursday";
      case 5:
        return "Today is f$$ckin Friday";
      case 6:
        return "Today is f$$ckin Saturday";
    }
  };
}
console.log(new Date().f$$kinDay());
