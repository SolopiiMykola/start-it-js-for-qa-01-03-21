const isEmpty = (obj) => {
    for (let key in obj) {
      return false;
    }
    return true;
  }

  console.log( isEmpty(schedule) ); 
  schedule["8:30"] = "get up";
  console.log( isEmpty(schedule) );










// ******
let Emptyobj = {};
let isEmpty = (obj) => { // use valid function name
    let objectLength = Object.keys(obj).length; // use let

    if (objectLength > 0) {
        console.log('false'); // use semicolon at the end of statement
    }
    else {
        console.log('true');
    }
}
        
funct(Emptyobj);




// ********
const isEmpty = (obj) => {
    return Object.keys(obj).length ? false : true
} 

let schedule = {};
console.log(isEmpty(schedule));
schedule["8:30"] = "get up";
console.log( isEmpty(schedule) );

// *****
let schedule = {};
let isEmpty = (obj) => {
    return !Object.keys(obj).length;
}

console.log(isEmpty(schedule));

schedule["8:30"] = "get up";
console.log(isEmpty(schedule))