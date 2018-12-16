const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    var request   = require('request');
    var pipe      = req.pipe(request.get('http://ip-api.com/json'));
    var response  = [];

    pipe.on('data',function(chunk) {
        response.push(chunk);
    });

    pipe.on('end',function() {
        var res2 = Buffer.concat(response);
       res.send(JSON.parse(res2).query);

    });
});
app.listen(process.env.PORT || 3000);