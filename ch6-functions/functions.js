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


// Sanity checks στα input params των συναρτήσεων
// έχουν νόημα μόνο αν public APIs, κλπ external data
const user = {
    id: 1,
    firstname: 'Alice',
    lastname: 'W.',
    hobbies: ['reading']
}

// Legacy
function getFirstHobby(user) {
    if (!(user && user.hobbies && Array.isArray(user.hobbies) && user.hobbies.length > 0)) {
        return
    }
    return user.hobbies[0]
}

// Modern way -- Object param
function getFirstHobby2(user) {
    return user?.hobbies?.[0] ?? 'no hobbies'
}

// for arrays
function gradesSum(grades) {
    if (!Array.isArray(grades) || grades.length === 0) {
        return
    }
    // for .....
}

// Arrow Function -- Implicit & Explicit return
const square = (n) => n * n     // Implicit return: curly braces & return
console.log(square(5))

// Explicit return
const cube = (n) => {
    const result = n * n * n
    return result
}

// Implicit return of object
const createUser = (username, role) => ({ usename: username, role: role})


// Hoisting
console.log(hello('Alice'))

// Hoisting
function hello(name) {
    return `Hello ${name}`
}

console.log(hello2('Bob'))
const hello2 = (name) => `Hello ${name}`


// Callbacks
function processUser(username, callback) {
    console.log(`Processing data of user ${username}`)
    callback(username)
}

processUser('online-user', (user) => {
    console.log(`Data received for user ${user}`)
})


// Closures
function createCounter() {
    let count = 0               // private

    return function() {
        count++
        return count
    }
}

const myCounter = createCounter()
console.log(myCounter())
console.log(myCounter())
console.log(myCounter())