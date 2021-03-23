const numbers = [1, -1, 2, 3];

function sum(numbers) {
    let sum = 0;
    for (let number of numbers){
        sum += number;
    }
    return sum;
}

console.log(sum(numbers))

// *****
const number = [1, 2, -5, 3];

let sum = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += Number(arr[i]);
    }
    return sum;
}

console.log(sum(number));

// Reducer
const numbers = [1, -1, 2, 3];

let sum = (numbers) => {return numbers.reduce((sum, current) => sum + current, 0)}

console.log(sum(numbers));

const numbers = [1, -1, 2, 3];
/*
The reducer function returns the value and assigns it to the accumulator.
The battery value is stored after all iterations and returned at the end as the only result.
*/
numbers.reduce((accumulator, currentValue, currentIndex, array) => {
    /*
        accumulator the same as our "let sum = 0;"
        currentValue will iterate throught all elements in array, 
        currentIndex will iterate throught all indexes in array
        array - source array
        so on each call we want to get the current value and add it to the accumulator
    */

    return accumulator + currentValue; // reduce with get the result and store it in accumulator
}, 0) // initial value for accumulator

// first call
// a = 0, c = 1, a + c = 1;
// second call
// a = 1, c = -1, a + c = 0;
// third call
// a = 0, c = 2, a + c = 2;
// fourth call
// a = 2, c = 3, a + c = 5;