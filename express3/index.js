const express = require('express');
const url = require('url');
const querystirng = require('querystring');
const port = 8080;

const app = express();

app.get('/info', (req,res) => {
    let a = url.parse(req.url, true)
    let queryA = a.query.a;
    let queryB = a.query.b;
    let result = queryA * queryB;
    console.log(result)
    //res.send(`a * b = ${result}`) -> a * b = 60
    //res.send({'result' : result}) -> {"result": 60}
    let object = {
        result: result
    }
    //res.send(object) -> {"result": 60}
    let finalresult = querystirng.stringify(object);
    res.send(finalresult) // -> result = 60
})

app.listen(port, () => {
    console.log(`Port: ${port}`)
})