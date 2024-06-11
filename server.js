const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.use('/', require('./routers/home.router'));

app.listen(3000, ()=>{
    console.log("Server started at port 3000")
});