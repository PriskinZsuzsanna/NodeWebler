const express= require('express');
const mustacheExpress= require('mustache-express');

const port = 8080;
const app = express();

//Meg kell adni milyen engine-t használok
app.engine('mustache', mustacheExpress());
//Meg kell adni h adat rendereléshez szeretném használni
app.set('view engine', 'mustache');
//Be kell állítani hol találhatók a nézetek
app.set('views', './views')

app.use('/css', express.static('css')) // -> /css/style.css linkkel
//app.use(express.static('css')) //-> /style.css linkkel

//postok feldolgozása body-ba
app.use(express.urlencoded({ extended:true }))
app.use(express.json())
var messages = {}

app.get('/', (req,res) => {
    let parameters = {
        creator: 'Zsuzsi',
        year: 2023
    }
    //view enginnel renderejük az oldalt
    res.render('index',parameters)
})

app.get('/profile/:username', (req,res) => {

    let parameters = {
        username: req.params.username,
        version: '1.0.0',
        unix: Date.now(),
        messages : messages[req.params.username] //üzenetek beolvasása az oldalra
    }
    res.render('profile', parameters)
});

//üzentek elküldése, feldolgozása
app.post('/profile-form/:username', (req,res) => {
    let username = req.params.username;
    let message = req.body.message;
    if(messages[username] === undefined) {
        messages[username] = []
    }
    messages[username].push(message) //message pusholás a messages objektum  adott userének 
   
    let parameters = {
        username: req.params.username,
        version: '1.0.0',
        unix: Date.now(),
        messages : messages[req.params.username]//üzenetek beolvasása az oldalra
    }
    res.render('profile', parameters)
})


app.listen(port,() => {
    console.log(port)
});