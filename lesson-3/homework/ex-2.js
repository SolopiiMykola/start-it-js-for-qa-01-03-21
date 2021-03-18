function helloColleagues() {
    company = "company";
    team = "QA team";
    let message = "I am working in " + company + " in amazing " + team;
 
    console.log(message);
    return message;
}
 helloColleagues();
 
function HelloColleagua(company = "Telecom", team = "IT") {
    
    let cmessage = (`I am working in:${company}  in amazing:${team} `);
    console.log(`I am working in ${company}  in amazing ${team} `);
    
}

HelloColleagua()

const helloColleagues =  (company = "Telecom", team = "IT") => {
    return `I am working in ${company}  in amazing ${team} `    
}

console.log(helloColleagues(undefined, 'QA'));



 let helloColleagues = {
    company: "Sweet.tv",
    team: "team",
    lol: (ololo) => {
        return(`I am working in ${helloColleagues.company} in amazing ${helloColleagues.team}`)
    }
}
console.log(helloColleagues.lol());