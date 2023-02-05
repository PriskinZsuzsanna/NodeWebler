//A megoldáshoz használt az url modult
const url = require('url');
const fs = require('fs')

//Készíts egy programot, ami a „url.txt” fájlban lévő URL címet beolvassa
if(fs.existsSync("url.txt")) {
    
    let urlAddress = fs.readFileSync("url.txt").toString()
    console.log(urlAddress)
    //majd az URL címmel kapcsolatos fontosabb adatokat soronként kiírja
    let urlData = url.parse(urlAddress, true)
    console.log(`${urlData.pathname}\n${urlData.query.name}\n${urlData.query.email}\n${urlData.query.password}`)

}

