// TEST 1
//  * Create a function that reverses a string without using built-in reverse() method
//  */

// function reverseString(str) {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--)
//         {
//         reversed += str[i];
//     }
//     return reversed;
// }
//     console.log(reverseString("hello"));
//     console.log(reverseString("happiness"))
// Test cases
// console.log(reverseString("hello"));    // "olleh"
// console.log(reverseString("JavaScript")); // "tpircSavaJ"



// TEST 2
// Write a function that prints numbers from 1 to n, but:
//  * - For multiples of 3, print "Fizz" instead of the number
//  * - For multiples of 5, print "Buzz" instead of the number
//  * - For multiples of both 3 and 5, print "FizzBuzz"
//  */
// function fizzBuzz(n) {
//     for (let A = 1; A <= n; A++) {
//         if (A % 3 === 0 && A % 5 === 0) {
//             console.log("FizzBuzz");
//         }  else if (A % 3 === 0) {
//     console.log("Fizz")
// }
//     else if (A % 5 === 0) {console.log("Buzz")

//     } else {
//         console.log(A);
//     }
//     } 
//     // Your code here
// }
// fizzBuzz(15);

// Test case
// fizzBuzz(15);
// Should output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz




// * Write a function that takes a sentence and returns the longest word
//  * If there are multiple words with the same length, return the first one
//  */
// function findLongestWord(sentence) {
//     const words = sentence.split (" ");
//     let longest = "";

//     for (let word of words) {
//         if (word.length > longest.length) {
//             longest = word;
//         }
//     }
//     return longest;
//     // Your code here
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))
// console.log(findLongestWord("Hello world programming"))

// Test cases
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // "jumped"
// console.log(findLongestWord("Hello world programming")); // "programming"



//  Write a function that takes an array of numbers and returns a new array with:
//  * - All even numbers doubled
//  * - All odd numbers tripled
//  * - Remove any numbers greater than 100 from the final result
//  */
function manipulateArray(numbers) {
    return numbers
        .map(num =>(num % 2 === 0 ? num * 2 : num * 3))
        .filter(num => num <= 100);
    // Your code here
}


console.log(manipulateArray([1, 2, 3, 4, 5, 60, 40])); 
// Should return [3, 4, 9, 8, 15] (60*2=120 which is >100, so removed)// Test case

