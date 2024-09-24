import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});

//M1 oefening 2 jouw leeftijd op toekomstige jaar //

let jeGeboorteJaar = await userInput.question('Wat is je geboortejaar? ');
console.log(jeGeboorteJaar);

let jeToekomstJaar = await userInput.question('welke jaar wil je je leeftijd van weten? ');
console.log(jeToekomstJaar);

let som = jeToekomstJaar - jeGeboorteJaar;
console.log(som);



console.log('Hallo ' + jeGeboorteJaar + 'mijn geboortejaar ' + jeToekomstJaar +' In 2030 word ik' + som +   'jaar oud');

// oefening optellen naar aantal seconden//

let dagen = await userInput.question('Geef het aantal dagen? ');
console.log(dagen);

let uren = await userInput.question('Geef het aantal uren? ');
console.log(uren);

let minuten = await userInput.question('Geef het aantal minuten? ');
console.log(minuten);

let seconden = await userInput.question('Geef het aantal seconden? ');
console.log(seconden);

let AantalSeconden = (dagen * 24 * 60 * 60 ) + (uren * 60 * 60 ) + (minuten * 60 ) + seconden;

console.log('Hallo' + dagen + ' Geef het aantal dagen ' + uren +  ' Geef het aantal uren ' + minuten + 'Geef het aantal minuten ' + seconden + ' Geef het aantal seconden ' + AantalSeconden + 'Aantal seconden');

process.exit();