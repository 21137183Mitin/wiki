const fs = require ("fs");
const chalk = require ("chalk");

const tiedosto = process.argv[2];
const nimi = process.argv[3];

console.log(process.argv[2]);

try {
    const dataBuffer = fs.readFileSync(tiedosto);
    const data  = dataBuffer.toString();
    // console.log(dataBuffer)
    console.log(data)
    if (data.includes(nimi)) {
    
        console.log(chalk.green('Löytyi!'));
    } else {
        console.log(chalk.red('Ei löytynyt!'));
    }

} catch (e) {
    console.log(chalk.red('Tiedostoa ei löytynyt!'));
}

