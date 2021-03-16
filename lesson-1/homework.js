Ex.1
let cat = 'cat';
let dog = 'dog';
 
const temp = dog;
dog = cat;
cat = temp;
 
console.log(cat);
console.log(dog);

// Using destructuring
[dog, cat] = [cat, dog];
console.log(cat);
console.log(dog);

Ex.2
const company = 'company';
const position = 'position';
 
console.log(company);
console.log(position);


Ex.3
const isProductCompany = false;
let productName;
 
console.log(typeof(isProductCompany));
console.log(typeof(company));
console.log(typeof(position));


Ex.4
productName = `name`;
 
console.log(productName);
console.log(typeof(productName));
