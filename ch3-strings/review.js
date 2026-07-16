// Άσκηση 1
// Μία συνάρτηση που παίρνει ως παράμετρο ένα string
// και επιστρέφει ένα νέο string με τους χαρακτήρες
// σε αντίστροφη σειρά

function reverse(str) {
    let returnedStr = ''

    for (let i = str.length - 1; i >= 0; i--) {
        returnedStr += str[i]
    }

    return returnedStr;
}

function reverse2(str) {
    return str.trim().split('').reverse().join('');
}

let str = "Coding"
console.log(reverse(str))


// Άσκηση 2
// Μία συνάρτηση που να ελέγχει αν ένα string
// είναι παλίνδρομο, αγνοώντας πεζά/κεφαλαία και κενά.
// Επιστρέφει boolean

function palindrome(str) {
    const cleaned = str.trim().toUpperCase().split(/\s+/).join('')

    for (let i = 0, j = cleaned.length - 1; i < j; i++, j--) {
        if (cleaned[i] !== cleaned[j]) {
            return false;
        }
    }
    return true;
}

function palindrome2(str) {
    const reversed = str.trim().toUpperCase().split(/\s+/).reverse().join('')
    return reversed === str.trim().toUpperCase().split(/\s+/).join('')
}


// Άσκηση 3
// Μία συνάρτηση που μετράει πόσα φωνήεντα
// [a, e, i, 0, u] περιέχει ένα string, ανεξαρτήτως
// κεφαλαίων / πεζών 

function countVowels(str) {
    const vowels = [...'aeiou']
    let count = 0

    for (const ch of str.toLowerCase()) {
        if (vowels.includes(ch)) {
            count++
        }
    }

    return count;
}

console.log(countVowels('Javascript'))

// Άσκηση 4
// Μία συνάρτηση που παίρνει ως είσοδο μία πρόταση
// και να επιστρέφει την ίδια πρόταση αλλά με το
// πρώτο γράμμα κάθε λέξης κεφαλαίο και τα υπόλοιπα πεζά
// και ένα κενό κενό μεταξύ των λέξεων
// 'codING   faCtory'  -> 'Coding Factory' 

function capitalize(str) {
    if (!str.trim()) return ''
    
    let returnedSentence = ''
    const tokens = str.trim().split(/\s+/)

    for (const token of tokens) {
        const newToken1 = token[0].toUpperCase()
        const newToken2 = token.slice(1).toLowerCase()
        returnedSentence += newToken1 + newToken2 + ' '
    }
    return returnedSentence.trim()
}

console.log(capitalize('codING   faCtory'))

