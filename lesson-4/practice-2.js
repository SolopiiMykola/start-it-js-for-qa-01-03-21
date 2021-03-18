// Array destructuring
// Destructuring assignment allows for instantly mapping an object or array onto many variables.
// we have an array with the name and surname
let arr = ["Mykola", "Solopii", 'Lol']

// destructuring assignment
let [firstName, surname, a] = arr;

alert(firstName); // Mykola
alert(surname);  // Solopii

let arr = ["Mykola", "Solopii", 'Lol']

// destructuring assignment
let [firstName, surname, a] = arr;

console.log(firstName); // 
console.log(surname); 
console.log(a); // 

console.log(arr[1][0]);

let cat = 'cat';
let dog = 'dog';

[cat, dog] = [dog, cat];

console.log(dog)

// Rest Operator "..." used to merge a list of function arguments into an array
function sortArgs(...args) {
    return args.sort()
  }

console.log(sortArgs)

const filter = (...args) => {
    return args.filter(el => el >= 3); // args combine all argument into an array, so we can apply only method for arrays
  }
  
console.log(filter(1, 2, 3, 4, 5)); 