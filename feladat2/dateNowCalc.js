const fs = require('fs');
const dateCalculation = require('./dateCalc')

if (!fs.existsSync('Priskin_Zsuzsanna.txt')) {
    let date = dateCalculation.dateCalculation()
    fs.writeFile('Priskin_Zsuzsanna.txt', `${date}`, (err) => {
        if(err) throw err
        console.log(`${date}`)
        return
    })
} else {
    console.log('A fájl már létezik');
    fs.unlink('Priskin_Zsuzsanna.txt', function(err) {
        if(err) throw err;
        console.log("A fájl törölve")
        return
    })
}

