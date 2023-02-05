const fs = require('fs')

exports.load = function (filename) {
    if(!fs.existsSync(filename)) {
        throw Error (`A keresett oldal (${filename}) nem található`)
    }
    return fs.readFileSync(filename)
}