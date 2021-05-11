const validator = require("email-validator");
const chalk = require('chalk');
 
try {
const email = process.argv[2];
console.log(email);
const valEmail = validator.validate(email); // true
console.log(valEmail);

    
    if (valEmail) {
    
        console.log(chalk.green('Kelvollinen sähköpostiosoite!'));
    } else {
        console.log(chalk.red('Epäkelpo sähköpostiosoite!'));
    }

} catch (e) {
    console.log(chalk.red('Sähköpostiosoite! ei löytynyt!'));
}