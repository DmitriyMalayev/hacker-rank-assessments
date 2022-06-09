//We first add the first three values in the array (if num = 3)
//We compare by moving the window, subtracting the first element and adding the next element.
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
