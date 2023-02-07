const exp = require('constants');
const express = require('express');
const url = require('url')
const util = require('util');
const port = 8081;

const app = express()


app.get('/', (req,res) => {

    let languages = {
        hu: {
            pattern_1: "Hello %s, üdv az oldalon. Mostani dátum: %s. Te vagy a %d. látogató.",
            pattern_2: "Hogy vagy ma, %s?",
            pattern_3: "Mit szólnál ehhez: %s?"
        },
        en: {
            pattern_1: "Hello %s, welcome in the site. Current date: %s. You are the %d. visitor.",  //%s változó, %d decimal
            pattern_2: "How are you today, %s?",
            pattern_3: "What about: %s?"

        }
    }

    let currentLanguage = req.query.language;
    
    let filled1 = util.format(languages[currentLanguage].pattern_1, "Alex", new Date(), 28282)
    let filled2 = util.format(languages[currentLanguage].pattern_2, "Alex")
    let filled3 = util.format(languages[currentLanguage].pattern_3, "Pálinka")

    res.send(`${filled1}\n${filled2}\n${filled3}`)
})

app.listen(port)