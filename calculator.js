// /**
//  * create a calclator function that takes two numbers and an operator (+, -, *, /) and returns the results of the operator
//  *handle division by zero by retuning "cannot divide by zero"
//  */


// function calculator(num1, num2, operator) {
//     if (operator === '+'){
//         return num1 + num2}
//      else if (operator === '-') {
//         return num1 - num2
//     }  else if (operator === '/')  {
//      if (num1 === 0 || num2 === 0) {
//         return 'cannot be dividedby zero'
//     } else {
//         return num1 /num2
//     }
// }

          
//      else if (operator === '*'){
//         return num1 * num2
//      }
// }
// console.log(calculator(10, 5, "+"))
// console.log(calculator(10, 5, "-"))
// console.log(calculator(10, 5, "/"))
// console.log(calculator(10, 5, "*"))
// console.log(calculator(10, 0, "/"))





// // write a function that takes a student's score (0-100) and returns their grace:
// 90-100: "A"
// 80-89: "B"
// 70-79: "C"
// 60-69: "D"
// Below 60: "F"

// function calculateGrade(score){
//     if (score >= 90 && score <= 100) {
//         return "A"
//     } else if (score >= 80 &&  score <=89) {
//         return "B"
//     } else if (score >= 70 && score <= 79) {
//         return "C"
//     }
// }
// console.log(calculateGrade(95))
// console.log(calculateGrade(82))
// console.log(calculateGrade(70))


/**
 * Create a function that reverses a string without using built-in reverse() method
 */
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
// // Test cases
// console.log(reverseString("hello"));    // "olleh"
// console.log(reverseString("JavaScript")); // "tpircSavaJ"


// Write a function that prints numbers from 1 to n, but:
//  * - For multiples of 3, print "Fizz" instead of the number
//  * - For multiples of 5, print "Buzz" instead of the number
//  * - For multiples of both 3 and 5, print "FizzBuzz"
//  */
function fizzBuzz(n) {
    for (let A = 1; A <= n; A++) {
        if (A % 3 === 0 && A % 5 === 0) {
            console.log("FizzBuzz");
        }  else if (A % 3 === 0) {
    console.log("Fizz")
}
    else if (A % 5 === 0) {console.log("Buzz")

    } else {
        console.log(A);
    }
    } 
    // Your code here
}
fizzBuzz(15);

// Test case
// fizzBuzz(15);
// Should output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz

