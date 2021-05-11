const fs = require('fs');

const file = 'henkilo.json';
const dataBuffer = fs.readFileSync(file);
const person = JSON.parse(dataBuffer);

console.log(person);

person.push({nimi: "Alex", ika:"25", asuinpaikka: "Somestreet 12"});
person.push({nimi: "Anna", ika:"56", asuinpaikka: "Koulukatu"});
person.push({nimi: "Samdi", ika:"30", asuinpaikka: "Wall Street 1st"});

console.log(person);

fs.writeFileSync(file, JSON.stringify(person));
