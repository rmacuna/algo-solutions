// Solution By: Fabio
function compareNumbers(a, b) {
  return a - b;
}

function twoNumberSum(array, targetSum) {
  array = array.sort(compareNumbers);
	let i = 0, j = array.length -1;
	while(i < j) {
		const sum = array[i] + array[j];
		if(sum < targetSum) {
			i++;
		} else if(sum > targetSum) {
			j--;
		}
		else {
			return [array[i], array[j]];
		}
	}
	return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
