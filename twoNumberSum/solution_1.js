// SOLUTION BY @Roberto Complexity O(N**2)
function twoNumberSum(array, targetSum) {
  // Write your code here.
	let sumPair = [];
	for (i = 0; i <= array.length; i++ ) {
		const elem = array[i];
		for (j = 0; j <= array.length; j++) {
			if ((elem + array[j]) === targetSum && i !== j) {
				sumPair.push(...[elem, array[j]])
				return sumPair;
			}
		}
	}	
	return sumPair;
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
