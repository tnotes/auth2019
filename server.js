const express = require('express');
const app = express();
var request   = require('request');

app.get('/',(req,res)=>{

    req.pipe(request.post('http://ip-api.com/json'));
});
app.listen(process.env.PORT || 3000);