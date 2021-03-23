sallary = { 
    Mykola: 250, 
    Pavlo: 250,
    Petro: 500 }

 // use variables inside function
let sum = (sallary) =>  {
    let result = 0;
     for (let key in sallary ) 
        result += sallary[key] // use +=
        console.log(result)
}
sum(sallary)  

// ********
let allSalaries = (obj) => {    // use const 
    let result = 0;

    for (key in obj) {
        result += +obj[key];
    }
    return result;
}
console.log(allSalaries(salaries));


// ****** 
const sumSalaries = (salaries) => {
    let sum = 0
    for (let key in salaries) {
        if (typeof salaries[key] === 'number' && salaries[key] >= 0) {
            sum += salaries[key]
        } else {
            return 'Invalid data'
        }
    }
    return sum
}

console.log(sumSalaries(salaries))