//Készíts egy modult, ami a következő függvényeket tartalmazza

    //primeCheck(number) – képes meghatározni egy számról, hogy prímszám-e

exports.primecheck = function primeCheck(number) {

    if (number === 2 || number === 3) {
        return "a prime";
    } else if (number <= 1 || number % 2 === 0 || number % 3 === 0) {
        return "not a prime"
    }

    for (let i = 5; i * i < number; i += 2) {
        if (number % i === 0) {
            return "not a prime";
        }
    }
    return "a prime"

}

    //parityCheck(number) – képes meghatározni egy számról, hogy páros-e
exports.paritycheck = function parityCheck(number) {

    if (number === 0) {
        return "Even";
    } else if (number % 2 !== 0) {
        return "Odd"
    }
    return "Even"

}

    //Az így kapott függvényeket exportáljuk a modulból ki, majd készíts egy feladat4.js nevű fájl, ahova importálod a modult és használod a függvényeit.
