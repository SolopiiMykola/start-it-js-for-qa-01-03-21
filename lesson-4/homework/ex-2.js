function arrayFromRange(min, max) {
    const ans = [];
    for (let i = min; i <= max; i++) {
        ans.push(i); // return outside of loop
    }
    return ans;
}

const negativeNumbers = arrayFromRange(-10, -8);
console.log(negativeNumbers);

const numbers = arrayFromRange(1, 4)
console.log(numbers);





const arrayFromRange = (min, max) => {
    let arr = [];
    min = Number(min);
    max = Number(max);
    while (min <= max) {
        arr.push(min);
        min++;
    }
    return arr;
}

console.log(arrayFromRange('-10', 2));