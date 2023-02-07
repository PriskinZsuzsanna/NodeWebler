//FILE HANDLING: app.use(express.static())

const express = require('express');
const app = express();
const port = 8080;

    //Minden ami a publicban van nyilvános lesz
app.use(express.static('public')); //fájlkezelés megoldva statikus oldalakra
    // ('/') => index.html
    // ('/index.html') => index.html
    // ('/contact.html') => contact.html
    // Automatikusan változik a tartalom server újraindítás nélkül

    //Képek: Minden ami az imagesben van nyilvános lesz, de csak az attachments viruális mappanév alatt
app.use(express.static('images')); // localhost:8080/photo.jpg - kérésre azonnal megjelenne: bad practice
app.use("/attachments", express.static('images')); // localhost:8080/attachments/photo.jpg - kérésre jelenik meg
//elrejtettük a látogatók elől a valódi mappát
//a valódi mappa nem a publicban volt, külön mappa!!!

app.listen(port, () => {
    console.log(`A szerver elindult. Port: ${port}`)
})
