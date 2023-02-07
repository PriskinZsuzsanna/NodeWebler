//BASIC ROUTING : app.get/post ...

const express = require('express');
const os = require('os');
const config = require('./package.json')//behivatkozom, hol találja - nem kell exportálni, nem modul
const port = 8080;

const app = express();

app.get('/', (req,res) => {
    res.send("Hello World") //textet küld
})

app.get('/pontos-ido', (req,res) => {
    res.send(new Date()) //json-t küld, beállítja a headet
})

app.get('/info', (req,res) => { //json-t küld, beállítja a headet
    let freeMem= Math.round(os.freemem() / os.totalmem() * 100 *1000)/1000 //szorzom 1000-rel, osztom ezerrel -> 3 tizedes
    res.send({
        author: config.author,
        year: 2023,
        memoryUsage : freeMem+"%",
    })
})

app.listen(port, () => {
    console.log(`A szerver elindult a ${port}-as porton`)
})

//const express, const app, app.listen() => ha csak ennyit adok meg, automatikusan visszajön a hibaüzenet: cannot get, 404 nem tölt a végtelenségig az oldal
//res.send()-ben bármilyen formátumot megadhatunk, nem kell a headben megadni, mit küldönk
