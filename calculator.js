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

function calculateGrade(score){
    if (score >= 90 && score <= 100) {
        return "A"
    } else if (score >= 80 &&  score <=89) {
        return "B"
    } else if (score >= 70 && score <= 79) {
        return "C"
    }
}
console.log(calculateGrade(95))
console.log(calculateGrade(82))
console.log(calculateGrade(70))