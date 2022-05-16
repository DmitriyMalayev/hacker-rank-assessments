function twoSum(nums, target) {
  let newArray = [];
  for (let i of nums) {
    if (i + (i + 1) === target) {
      newArray.push([i, i + 1]);
    } 
  }
  return newArray;
}

// console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 3], 6));




var twoSum = function(nums, target) {
  // Set up a hashmap to keep track of key/value pairs,
  // where the key is nums[i], and the value is i.
  // We'll use this to look up numbers that exist in the array in constant time,
  // which is useful since we were told that each input has exactly one solution.
  const hashmap = {}
  
  // Iterate through the numbers in the array,
  for (let i=0; i<nums.length; i++) {
      // Check the difference between the target numbers, and nums[i]
      const difference = target - nums[i]
      
      // Since we know the difference between target and nums[i],
      // we can check to see if we've seen it already, by checking if hashmap[difference] exists.
      //
      // If we have seen the difference before, we return the current index, 
      // and the index at which we saw the difference.
      if (hashmap.hasOwnProperty(difference)) {
          return [i, hashmap[difference]]
      }
      
      // Otherwise, store the current number in the hashmap, 
      // along with its index
      hashmap[nums[i]] = i
  }
};