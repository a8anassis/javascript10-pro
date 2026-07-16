// Άσκηση
// Μία συνάρτηση που να παίρνει ένα πίνακα
// αριθμών και να επιστρέφει το μεγαλύτερο
// αριθμό, χωρίς την Math.max

function findMax(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return
    }

    let max = -Infinity
    for (const element of arr) {
        if (element > max) {
            max = element
        }
    }
    return max
}

console.log(findMax([13, 5, 78, 42]))

