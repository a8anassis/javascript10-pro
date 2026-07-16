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
    return reversed === str.toUpperCase()
}