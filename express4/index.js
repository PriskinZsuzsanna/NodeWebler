const express = require('express');

const app = express();
const port = 8080;

app.get('/profile/:username/overview', (req,res) => { //:username - változó: univerzális endpoint
    //bármit ad meg a :username helyén, azt mi username-ként mentjük el: req.params.usernameként hivatkozunk rá, olvassuk ki
    let username = req.params.username
    res.send("Hello "+ username)
});

app.listen(port, () => {
    console.log(port)
})