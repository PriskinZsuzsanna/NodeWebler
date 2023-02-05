const http = require('http');
const url = require('url');
const querystring = require('querystring');

http.createServer((req,res) => {
    if(req.url === '/favicon.ico'){
        return
    }
//----URL MODUL HASZNÁLATA: !!!!! url.parse( , true)-val 
    let parsedUrl = url.parse(req.url,true)
    console.log(parsedUrl.query)

    let numberString = parsedUrl.query
    //Adott egy objektum - a req url query paramétereivel
    console.log(numberString)
    //Az objektumban található number1, number2 és number3 értékét szorozd meg egymással
    let result = numberString.number1 * numberString.number2 * numberString.number3
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
 
    res.end("")
}).listen(8080)