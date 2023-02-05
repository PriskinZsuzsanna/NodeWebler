//Készíts egy modult, ami a következő függvényeket tartalmazza
    //primeCheck(number) – képes meghatározni egy számról, hogy prímszám-e
    //parityCheck(number) – képes meghatározni egy számról, hogy páros-e
    //Az így kapott függvényeket exportáljuk a modulból ki, majd készíts egy feladat4.js nevű fájl, ahova importálod a modult és használod a függvényeit.

const primecheck = require('./module');
const paritycheck = require('./module')

let number = Math.floor(Math.random() * 1000)
console.log(`${number} is ${primecheck.primecheck(number)}`) 
console.log(`${number} is ${paritycheck.paritycheck(number)}`) 

