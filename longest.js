/*Write a JavaScript function that accepts a string as a parameter and finds the longest 
word within the string.
Example string : 'Web Development Tutorial'
Expected Output : 'Development'
*/
function longest(str) {
    let words = str.split(' ');

    let longestWord = '';
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

let inputString = 'Web Development Tutorial';
let result = longest(inputString);
console.log(result); 
