const numbers = [1, 2, 3, 4, 5]

function getMax([]) {
  return Math.max(...numbers) // use native methods
}

 const maxNumber = getMax([]);
console.log(maxNumber)






// ****
const numbers = [1, 2, 3, 4, 5];
const getMax = (numbers) => {
    let max = Number(numbers[0]);
    for(let i = 1; i < numbers.length; i++) {
        max = (numbers[i] >= max) ? Number(numbers[i]) : max;
    }
    return max;
}

console.log(getMax(numbers));





let zzz = [10, 2, 15,2,5,24];
getMax = (arr) => {
  arr.sort((a, b) => a - b)
  console.log(arr[arr.length -1])
}

getMax(zzz)

// If the result is positive b is sorted before a
// If the result is 0 no changes are done with the sort order of the two values.
// If the result is negative a is sorted before b.

console.log(num.sort((a, b) => a - b)); 
// first call (15 - 2) - positive 2 move at the begining
// second call (-25 - 2) - negative vaue

/*
function compare(a, b) {
    if (a is less than b by some ordering criterion) {
      return -1;
    }
    if (a is greater than b by the ordering criterion) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }
  */