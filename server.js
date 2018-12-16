const express = require('express');
const app = express();
var request   = require('request');

app.get('/',(req,res)=>{

    req.pipe(
        request[req.method.toLowerCase()]('http://ip-api.com/json'))
        .pipe(res)
});
app.listen(process.env.PORT || 3000);