// 1. Basic Function Syntax
function sayHello(name) {
    return `Hello ${name}`
}

console.log(sayHello('Alice'))

// 2. Function Expression
const add = function(a, b) {
    return a + b
}

console.log(add(3, 8))

// 3. Arrow Functions
const multiply = (a, b) => a * b;

console.log(multiply(4, 6))

// Optional Params
function createButton(text, color) {
    color = color || 'blue'    
    console.log(text, color)
}

createButton('Hello')
createButton('Hello', '')

// Default params -- ES6
// Λειτουργούν ως overload
function createButton2(text, color = 'blue') {
    console.log(text, color)
}

createButton2('Hello')          // Hello blue
createButton2('Hello', 'red')   // Hello red
createButton2('Hello', '')      // Hello


// Rest parameters
// let arr = [1, 2, 3, 4]
// max(...arr)
// max(1, 2, 4, 7)
function max(...numbers) {                  // rest
    // for (const num of numbers) {
    //     // find max
    // }
    return Math.max(...numbers)             // spread
}

console.log(max(1, 2,8, 3, 23, 17))         // 23


function calculateTotalPrice(discount, ...prices) {
    const totalPrice = prices.reduce((sum, price) => sum + price, 0)
    return totalPrice - discount
}

console.log(calculateTotalPrice(5, 10, 8, 30.7))