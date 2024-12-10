/*Write a JavaScript function that generates all combinations of a string.
Example string : 'dog'
Expected Output : d,do,dog,o,og,g
*/
function genComb(str) {
    let combinations = [];
    
    for (let i = 0; i < str.length; i++) {
        for (let j = i + 1; j <= str.length; j++) {
            combinations.push(str.slice(i, j));
        }
    }

    return combinations;
}

let string = 'dog';
let result = genComb(string);
console.log(result.join(','));  
