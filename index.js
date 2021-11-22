const express = require('express');
const app = express();
const router = require('./routes');



app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', router); 

const server = app.listen(3000, () => {
    console.log("Hello Folks!")
});

module.exports = server;