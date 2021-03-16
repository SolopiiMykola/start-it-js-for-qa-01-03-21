// Ex.1
let a = 1;
let b = 2;
const few = 'Few'; 
const condition = (a + b < 10)
// define spaces beteen operators and operands
let result = condition ? few : 'Many'; // you can store values in variables and then use it
console.log(result)


//Ex.2  
    
let age = 18;
let message;
    if (18 >= age && age <= 90) message = true; // you can pass if/else in one line without brackets
    else message = false;
    
console.log(message)

let age = 29;
if (age >= 18 && age <= 90) {
    console.log('Вам от 18 до 90 лет!');
} else if (age < 18) {
    console.log('Вам меньньше 18!');
} else {
    console.log('Вам больше чем 90 лет!');
}