const express = require('express');
const bodyParser = require('body-parser');

const path = require('path');

const app = express();
const rootDir = require('./path');


app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(path.join(__dirname,"/public")));

app.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,"views","index.html"));
})

app.get('/users',(req,res,next)=>{
    res.sendFile(path.join(__dirname,"views","users.html"));
})

app.listen(3000,()=>{
    console.log('Server listen on port 3000');
})