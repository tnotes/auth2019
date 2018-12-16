const express = require('express');
const app = express();
var request   = require('request');

app.get('/',(req,res)=>{

   var pipe      = req.pipe(request('http://ip-api.com/json'));
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