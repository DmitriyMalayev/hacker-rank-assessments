/*
Given two strings, text1 and text2, return the length of their longest common subsequence. 
A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters. 
"ace" is a subsequence of "abcde" while "aec" is not. 
A common subsequence of two strings is a subsequence that is common to both strings. 
If there is no common subsequence return 0. 

A subsequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array. For instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], and so do the numbers [2, 4].
*/

// function longestCommonSubSequence(text1, text2){

// }

function isSubsequence(s, t) {
  let i = 0;
  let j = 0;

  while (i < s.length && j < t.length) {
    console.log(s[i], t[j]);
    if (s[i] === t[j]) {
      i++;
      j++;
    } else {
      j++;
    }
  }
  return i === s.length;
}

// console.log(longestCommonSubSequence("abcde", "ace"))
console.log(isSubsequence("abcde", "ace"));
