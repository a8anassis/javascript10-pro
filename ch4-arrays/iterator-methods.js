const students = ['Alice', 'Andreas', 'Andreas', 'Bob', 'Costas'];

students.forEach(function(value, index, arr) {
    console.log(index, value, arr);

})

students.forEach(function(value) {
    console.log(value);
})

students.forEach(function(_, index) {   //   _ intentionally ignored
    console.log(index);
})