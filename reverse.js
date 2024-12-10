/*Write a JavaScript function that reverses a number.
Example x = 32243;
Expected Output : 34223*/

function reverseNumber(x) {
    let reversedString = x.toString().split('').reverse().join('');
    return parseInt(reversedString, 10);
}


let x = 32243;
let result = reverseNumber(x);
console.log(result);
