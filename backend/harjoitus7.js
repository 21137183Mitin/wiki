const fs = require('fs');

const dataBuffer = fs.readFileSync('opiskelijat.json');

const person = JSON.parse(dataBuffer);

person.filter(age => age.ika < 18 ? null : console.log(age));


// console.log(person);

// person.filter(age => {
//     if (age.ika < 18) {
//         console.log('')
//     } else {
//         console.log(age)
//     }
// });
