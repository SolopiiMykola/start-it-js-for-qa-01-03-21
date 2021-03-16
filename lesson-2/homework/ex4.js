
let number = prompt ('Please write a number from 1 to 100.');

if (number <= 100 && number > 90) {
    alert('A');
} else if (hour <= 90 && number > 80) {
    alert('B');
} else if (hour <= 80 && number > 70) {
    alert('C');
} else if (hour <= 70 && number > 60) {
    alert('D');
} else if (hour <= 60 && number > 50) {
    alert('F');
} else {
    // add some default else block
}


let RangeGrade = prompt('Please, write '); // use camel case in variables name
if (RangeGrade < 60) {
    alert ('F');
}else if (RangeGrade < 70) {
    alert ('D');
}else if (RangeGrade < 80) {
    alert ('C');
}else if (RangeGrade < 90) {
    alert ('B');
}else if (RangeGrade < 100) {
    alert ('A');
}else {
    alert ('You write an error RangeGrade')
}


let num = prompt("Please, enter a number", );

switch(true) {
    case num < 60:
        alert("F");
        break;
    case num < 70:
        alert("D");
        break;
    case num < 80:
        alert("C");
        break;
    case num < 90:
        alert("B");
        break;
    case num < 100:
        alert("A");
        break;
    default:
        alert("The number is not in scope.");
}