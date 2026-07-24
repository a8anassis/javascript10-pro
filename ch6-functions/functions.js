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