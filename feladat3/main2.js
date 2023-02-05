const querystring = require('querystring');
const url = require('url');
const http = require('http');

http.createServer((req,res) => {
    if(req.url === '/favicon.ico'){
        return
    }
//----URL MODUL HASZNÁLATA: !!!!! url.parse( , true) nélkül

    let parsedUrl = url.parse(req.url)
    console.log(parsedUrl)
    console.log(parsedUrl.query)
    let numberString = parsedUrl.query

    //Adott egy string: number1=12&number2=16&number3=19
    console.log(numberString)

//----QUERYSTRINGMODUL HASZNÁLATA: querystring.parse

    //dolgozd fel a string kulcs-érték párjait egy változóba a query string segítségével
    let parsedString = querystring.parse(numberString)
    console.log(parsedString)
    //A number1, number2 és number3 értékét szorozd meg egymással
    let result = parsedString.number1 * parsedString.number2 * parsedString.number3
    console.log(result)
    //Az így kapott értéket helyezd be egy objektumba, aminek egy propertyje van result néven.
    let object = {
        "result" : result
    }
    console.log(object)
    
//----QUERYSTRINGMODUL HASZNÁLATA: querystring.stringify

    //Használd a querystring modult, hogy „result=3648” szöveget kapj
    let stringifiedObject= querystring.stringify(object)
    console.log(stringifiedObject)

//----Alakítsuk vissza url címmé:
    let url2 = "https://valami.hu/xy"
    let newUrl = url2+"?"+stringifiedObject
    console.log(newUrl)

    res.end("")
}).listen(8080)
