const express = require('express');
const port = 8080;

const app = express();

app.use(express.static('public'));
app.use(express.static('images'))


app.listen(port, () => {
    console.log(`Port = ${port}`)
})