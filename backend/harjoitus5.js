const fs = require('fs');

const dataBuffer = fs.readFileSync('henkilo.json');

const dataJSON = JSON.parse(dataBuffer);

console.log(dataJSON);

dataJSON.nimi = "Anton";


console.log(dataJSON);