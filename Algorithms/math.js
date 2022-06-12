var addStrings = function (num1, num2) {
  let newNumber1 = num1.split("")
  let newNumber2 = num2.split("")
  let total = 0;

  for (let i=0; i<newNumber1.length; i++){
    let first = newNumber1.pop() || 0 
    let second = newNumber2.pop() || 0
    total += (parseInt(first + second))
  }
  return total
}

console.log(addStrings("110312", "41"));
