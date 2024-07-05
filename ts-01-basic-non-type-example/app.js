"use strict";
const num1Input = document.getElementsByTagName('input')[0];
const num2Input = document.getElementsByTagName('input')[1];
const buttonToAdd = document.getElementsByTagName('button')[0];
const numResult = [];
const textresult = [];
function add(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + " " + num2;
    }
    return num1 + " " + num2;
}
function toPrint(returnObj) {
    console.log(returnObj.val);
}
buttonToAdd.addEventListener('click', () => {
    const num1 = num1Input.value;
    const num2 = num2Input.value;
    const result = add(+num1, +num2);
    numResult.push(result);
    const stringResult = add(num1, num2);
    textresult.push(stringResult);
    toPrint({ val: result, typestamp: new Date() });
    console.log(numResult, textresult);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('it worked');
    }, 1000);
});
myPromise.then((result) => {
    console.log(result.split('w'));
});
