//Ex.1

let a = 1;
let b = 1;

let c = ++a;
let d = b++;


//Try to guess what is the value should returned inside the a, b, c, d variables below
console.log(a); // 2 cause 1+a in c variable
console.log(b); // 2 cause 1+b in d variable (2'nd call variable b in console.log)
console.log(c); // 2 cause 1+a 
console.log(d); // 1 cause just 1'nd call variable b 






let languageTypeBlaBla = promt('Please enter your language').toLowerCase(); // need to dynamicaly pass language instead of hardcoding value
switch(language){
    case 'chinese':
    case 'mandarin': // need to define two case with the same result
        console.log ('MOST number of native speakers!');
        break;
         case 'spanish':
             console.log ('2nd place in number of native speakers');
             break;
         case 'english':
             console.log ('3rd place');
             break;
         case 'hindi':
             console.log ('Number 4');
             break;
         case 'arabic':
             console.log ('5th most spoken language');
             break;
         default:
             console.log ('Great language too :D');
}

