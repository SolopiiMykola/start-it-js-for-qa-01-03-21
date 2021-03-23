let menu = { width: 200, height: 300, title: "My menu" };

let multiplyNumeric = (obj) => {
    for (key in obj) {
        if (typeof(obj[key]) === "number") obj[key] = obj[key] * 2;
        else "Type number values";
    }
}
multiplyNumeric(menu);
console.log(menu);