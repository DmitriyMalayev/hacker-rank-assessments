var isVowel = function (char) {
  let vowels = "aeiou";
  return vowels.includes(char.toLowerCase());
};

var reverseVowels = function (s) {
  let stringArr = s.split(""); //strings are immutable we need to convert it into an array
  let pointer1 = 0; //left side
  let pointer2 = stringArr.length - 1; //right side

  //while loop will iterate after break to look again
  while (pointer1 < pointer2) {
    while (pointer1 < pointer2) {
      //assures no clash
      if (!isVowel(stringArr[pointer1])) {
        pointer1++; // move to the right until at a reaches a vowel
      } else {
        break;
      }
    }
    while (pointer1 < pointer2) {
      //assures no clash
      if (!isVowel(stringArr[pointer2])) {
        pointer2--; // move to the left until it reaches a vowel
      } else {
        break;
      }
    }
    let temp = stringArr[pointer1]; //switch the characters
    stringArr[pointer1] = stringArr[pointer2];
    stringArr[pointer2] = temp;

    pointer1++;
    pointer2--;
  }
  return stringArr.join("");
};

console.log(reverseVowels("hello"));
