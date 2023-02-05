const fs = require('fs');

if (!fs.existsSync('Priskin_Zsuzsanna.txt')) {
    let date = new Date();
    fs.writeFile('Priskin_Zsuzsanna.txt', `${date}`, (err) => {
        if(err) throw err
        console.log(`A fájl létrehozva: ${date} dátummal és tartalommal.`)
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