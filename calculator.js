/**
 * create a calclator function that takes two numbers and an operator (+, -, *, /) and returns the results of the operator
 *handle division by zero by retuning "cannot divide by zero"
 */


function calculator(num1, num2, operator) {
    if (operator === '+'){
        return num1 + num2}
     else if (operator === '-') {
        return num1 - num2
    }  else if (operator === '/')  {
     if (num1 === 0 || num2 === 0) {
        return 'cannot be dividedby zero'
    } else {
        return num1 /num2
    }
}

          
     else if (operator === '*'){
        return num1 * num2
     }
}
console.log(calculator(10, 5, "+"))
console.log(calculator(10, 5, "-"))
console.log(calculator(10, 5, "/"))
console.log(calculator(10, 5, "*"))
console.log(calculator(10, 0, "/"))