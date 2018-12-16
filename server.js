const express = require('express');
const app = express();
app.use(express.static('public'));
app.get('/',(req,res)=>{
    let request = require('request');
    request.get('http://ip-api.com/json',(err,resu,body)=>{
        let ip = JSON.parse(body).query;
        res.send((ip))
    })
});
app.listen(80);