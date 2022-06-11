function getDrome(left, right, str) {
  // checking for out of bounds
  while (left >= 0 && right < str.length) {
    // 2nd while true.  comparing b !== a
    if (str[left] !== str[right]) {
      break;
    }
    left--;
    right++;
  }
  return [left + 1, right];
}

function longestPalindrome2(str) {
  let max = [0, 1]; //In the constraint it's specified that we will always have a minimum of one character.

  for (let i = 0; i < str.length; i++) {
    let even = getDrome(i - 1, i, str); //We want to get the previous character and the current character
    let odd = getDrome(i - 1, i + 1, str); // We want to get the previous character and the character after the current one.
    let currentMax = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    // 1st   true  odd = [0,1]  
  
    max = max[1] - max[0] > currentMax[1] - currentMax[0] ? max : currentMax;
  }
  return str.slice(max[0], max[1]); //If str consists of one character that will be the palidrome.
}
console.log(longestPalindrome2("abcdeef"));
