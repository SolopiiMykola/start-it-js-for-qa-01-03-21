
// ********
let salaries = { 
    workers: {
    Mykola: 950,
    Pavlo:  700, 
    Petro:  800,
    Helen: null
    },
    culcSumm: () => {
        let result = 0; 
        for (let key in salaries.workers){
    //  if ((this.workers)[key] != null){
            result += (salaries.workers)[key]
    // } 
        }
        return result
    },

    topSalaries: function() {
        let max = 0;
        let name = ''; // use empty string

        for (const [employee, salary] of Object.entries(salaries.workers))  {
            if (max < salary) {
                max = salary; // 950
                name = employee; // Mykola
            }
        }
        // for (let key in this.workers) {
        //     max = Math.max ((this.workers)[key], max);
        
        return `${name} has biggest salary of ${max}`;
        // return max
    }
}
console.log(salaries.culcSumm())
console.log(salaries.topSalaries())

// ********
let biggestSalary = (obj) => {
    let max = 0;
    let highestPaidEmployee;   
    
    for (key in obj){
        max = maxNumber(obj[key], max); // use function from task 2.2
    } 
    
    highestPaidEmployee = Object.keys(obj).filter(key => obj[key] === max);  // Записываем в массив все ключи с макс значением

    return [highestPaidEmployee, max];
}

console.log(biggestSalary(salaries));


// ********
let salaries = { 
    Mykola: 250, 
    Pavlo: 250, 
    Petro: 500 
};

function getBiggestSalary (salariesObject) {
    let highestSalary = 0;
    let richestEmployeeName = '';
    for (let key in salariesObject) {
        if (highestSalary <= salariesObject[key]) {
            highestSalary = salariesObject[key]; // first iteration 250, second iteration 250
            richestEmployeeName = key; // first it Mykola, Petro
        }
    }
    return {  // you can return any data type
        name: richestEmployeeName,
        salary: highestSalary
    };
}

getBiggestSalary(salaries);
