const userName = prompt('Please, enter your first name '); // use const by default
alert (`Hello ${userName}`); // use template string
let birthDay = +prompt('Please enter your birthday year');
const currentYear = new Date().getFullYear(); // use + to convert string to number
alert(currentYear - birthDay);
// Verify is you work with expected values in variables and arguments











let userEnter = prompt("What is your name");
 alert('Hi, '+userEnter+' ,Please to meet you');
 let userAge = prompt(" Please enter your birthday year");
let currentYear = new Date().getFullYear();
if (Number(userAge) != NaN && Number(userAge) >= 0 && Number(userAge) <= Number(currentYear))
{
   alert(`Your age ${Number(currentYear) - Number(userAge)} years`)}
 else {alert('Please enter correct value')}



 ////////
const name = prompt('Please enter your first name');
if (name) alert(`Hello, ${name}, nice to meet you `);
const birthYear = prompt('Please enter your birthday year');
let year = new Date().getFullYear();
if (birthYear) let ageYear = year - birthYear;
alert(`your age is ${ageYear}`);

