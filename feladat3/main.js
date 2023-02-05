let querystring = require('querystring');

//Adott egy string: number1=12&number2=16&number3=19
let numberString = 'number1=12&number2=16&number3=19'

//Programatikusan, a program indulása után automatikusan lefutva dolgozd fel a string kulcs-érték párjait
//egy változóba a query string segítségével
let parsedString = querystring.parse(numberString);
console.log(parsedString)

//A number1, number2 és number3 értékét szorozd meg egymással
let result = parsedString.number1 * parsedString.number2 * parsedString.number3
console.log(result)

//Az így kapott értéket helyezd be egy objektumba, aminek egy propertyje van result néven.
let object = {
    'result':  result
}
console.log(object)

//Használd a querystring modult, hogy „result=3648” szöveget kapj 
let stringifiedObject = querystring.stringify(object)
console.log(stringifiedObject)

