const http = require('http');
const url = require('url');
const filehandler = require('./filehandler')

function loadErrorPage (res,err) {
    console.log(err);
    res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
    res.end(filehandler.load('error.html'))
}

http.createServer(function (req, res) {
    let urlData = url.parse(req.url)
    let seasonPathname = urlData.pathname 
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })

    switch (seasonPathname) {
        case '/' :
            try {
                res.end(filehandler.load('index.html'))
            } catch(err) {
                loadErrorPage(res,err)
            }
            return;
        case seasonPathname:
            try {
                res.end(filehandler.load("." + seasonPathname))
            }catch(err) {
                loadErrorPage(res,err)
            }
            return;
        case '/favicon.ico':
            res.end()
            return;
        default: res.end(filehandler.load('index.html'))
    }
   

}).listen(8081);