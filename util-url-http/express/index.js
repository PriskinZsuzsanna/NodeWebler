const http = require('http');
const url = require('url')
const util = require('util');
const port = 8080;

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })

    
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

    if(req.url === '/favicon.ico'){
        return
    }

    let urlData = url.parse(req.url, true);
    let currentLanguage = urlData.query.language;

    let filled1 = util.format(languages[currentLanguage].pattern_1, "Alex", new Date(), 28282)
    let filled2 = util.format(languages[currentLanguage].pattern_2, "Alex")
    let filled3 = util.format(languages[currentLanguage].pattern_3, "Pálinka")

    res.end(`${filled1}\n${filled2}\n${filled3}`)
}).listen(port, () => { console.log(`Szerver elindult a ${port}-as porton`) })