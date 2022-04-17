
function sortedSquaredArray(array = []) {
  // Write your code here.
  // Time complexity O(n*log(n))
  // Space complexity O(n)
  return array.map((el) => el**2).sort((a, b) => a - b);
}
