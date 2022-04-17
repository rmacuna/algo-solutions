// Solution by Roberto
// Time Complexity O(n)
// Space Complexity O(n);
function sortedSquaredArray(array) {
  const sortedSquares = new Array(array.length).fill(0);
  let smallerValueIndex = 0;
  let largerValueIndex = array.length - 1;

  for (let index = array.length - 1; index >= 0; index--) {
    const smallerValue = array[smallerValueIndex];
    const largerValue = array[largerValueIndex];

    if (Math.abs(smallerValue) > Math.abs(largerValue)) {
      sortedSquares[index] = smallerValue * smallerValue;
      smallerValueIndex++;
    } else {
      sortedSquares[index] = largerValue * largerValue;
      largerValueIndex--;
    }
  }

  return sortedSquares;
}
