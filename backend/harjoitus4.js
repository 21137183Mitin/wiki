const fs = require('fs');

// const dataBuffer = fs.readFileSync('olio.json');
// const dataJSON = dataBuffer.toString();
// const olio = JSON.parse(dataJSON);
// console.log(olio);

// olio.ika = 25;
// olio.osoite = 'Somekatu';

// olioJSON = JSON.stringify(olio);
// fs.writeFileSync('olio.json',olioJSON);

// console.log(olio);

let filePath = 'nimet.json';
const dataBuffer = fs.readFileSync(filePath);

const dataJSON = dataBuffer.toString();

const object = JSON.parse(dataJSON);

object.forEach(element => {
    console.log(`${element.nimi}  ${element.ika}`);
});