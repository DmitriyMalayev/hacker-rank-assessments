

function areThereDuplicates(...args) {
 // Two pointers
 args.sort((a,b) => a > b);
 let start = 0;
 let next = 1;
 while(next < args.length){
   if(args[start] === args[next]){
       return true
   }
   start++
   next++
 }
 return false
}
function areThereDuplicates() {
 return new Set(arguments).size !== arguments.length;
}




function averagePair(arr, num){
 let start = 0
 let end = arr.length-1;
 while(start < end){
   let avg = (arr[start]+arr[end]) / 2
   if(avg === num) return true;
   else if(avg < num) start++
   else end--
 }
 return false;
}
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
function isSubsequence(str1, str2) {
 if(str1.length === 0) return true
 if(str2.length === 0) return false
 if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1)) 
 return isSubsequence(str1, str2.slice(1))
}



function maxSubarraySum(arr, num){
   if (arr.length < num) return null;
 
   let total = 0;
   for (let i=0; i<num; i++){
      total += arr[i];
   }
   let currentTotal = total;
   for (let i = num; i < arr.length; i++) {
      currentTotal += arr[i] - arr[i-num];
      total = Math.max(total, currentTotal);
   }
   return total;
}
function minSubArrayLen(nums, sum) {
 let total = 0;
 let start = 0;
 let end = 0;
 let minLen = Infinity;
 
 while (start < nums.length) {
   // if current window doesn't add up to the given sum then
		// move the window to right
   if(total < sum && end < nums.length){
     total += nums[end];
			end++;
   }
   // if current window adds up to at least the sum given then
		// we can shrink the window
   else if(total >= sum){
     minLen = Math.min(minLen, end-start);
			total -= nums[start];
			start++;
   }
   // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
   else {
     break;
   }
 }
 
 return minLen === Infinity ? 0 : minLen;
}
function findLongestSubstring(str) {
 let longest = 0;
 let seen = {};
 let start = 0;
 
 for (let i = 0; i < str.length; i++) {
   let char = str[i];
   if (seen[char]) {
     start = Math.max(start, seen[char]);
   }
   // index - beginning of substring + 1 (to include current in count)
   longest = Math.max(longest, i - start + 1);
   // store the index of the next char so as to not double count
   seen[char] = i + 1;
 }
 return longest;
}
