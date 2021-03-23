function maxNumber (a, b) {
    return Math.max(a,b) // use native method to compare numbers for learning purpose
    }

console.log(maxNumber (1, 2));

// **********
let maxNumber = (a,b) => {
    if (a>b) {console.log(a)}
    else if(a<b) {console.log(b)}
    else {console.log('numbers are equal')}
}

maxNumber (1,2)

// **********
let maxNumber = (a, b) => {
    if(a === null || b === null || isNaN(Number(a)) || isNaN(Number(b)))  // Добавил еще обработку типа null - если один из аргументов null, верну NaN
        return NaN; // use meaningfull exception message
    return Number(a) > Number(b) ? Number(a) : Number(b); // Добавил возврат числа, даже, если на входе был string
}
console.log(maxNumber('5'/'2', 2)); // 2.5
console.log(maxNumber(null, 2)); // NaN
console.log(maxNumber(undefined, 2)); // NaN
console.log(maxNumber('a'/2, 2)); // NaN
console.log(maxNumber(undefined, 2)) // NaN
console.log(maxNumber(0, '-2')) // 0

// **********
const maxNumber = (a = 0, b = 0) => {
    if ((typeof a) === 'number' && (typeof b) === 'number') {
        return (a > b) ? a : b
    } else {
        return 'Please type valid function argument data'
    }
}