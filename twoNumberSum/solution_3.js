// Formula X + Y = targetSum
function twoNumberSum(array, targetSum) {
  let rightPointer = array.length - 1;
  let leftPointer = 0;

  const sortedArray = array.sort((a, b) => a - b);

  while (leftPointer < rightPointer) {
    const sum = sortedArray[rightPointer] + sortedArray[leftPointer];
    if (sum > targetSum) {
      rightPointer--;
    } else if (sum < targetSum) {
      leftPointer++;
    } else {
      return [sortedArray[leftPointer], sortedArray[rightPointer]];
    }
  }
}

// O(n*log(n)) Time complexity
// O(1) Space complexity 
