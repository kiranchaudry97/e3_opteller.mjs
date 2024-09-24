import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});



let jeGeboorteJaar = await userInput.question('Wat is je geboortejaar? ');
console.log(jeGeboorteJaar);

let jeToekomstJaar = await userInput.question('welke jaar wil je je leeftijd van weten? ');
console.log(jeToekomstJaar);

let som = jeToekomstJaar - jeGeboorteJaar;
console.log(som);



console.log('Hallo ' + jeGeboorteJaar + 'mijn geboortejaar ' + jeToekomstJaar +' In 2030 word ik' + som +  'jaar oud');

process.exit();