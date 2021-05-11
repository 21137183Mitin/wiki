const fs = require('fs');

const file = 'henkilo.json';
const dataBuffer = fs.readFileSync(file);
const dataJSON = dataBuffer.toString();

const person = JSON.parse(dataJSON);
// console.log(dataJSON);
// console.log(person);

person.nimi = 'Anton';
person.ika = '31';


// console.log(dataJSON);
// console.log(person);

const toWrite = JSON.stringify(person);
fs.writeFileSync(file, toWrite);