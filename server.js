const express = require('express');
const app = express();
var request   = require('request');

app.get('/',(req,res)=>{

   var pip      = req.pipe(request('http://ip-api.com/json'));
   var response  = [];

   pip.on('data',function(chunk) {
      response.push(chunk);
   });

   pip.on('end',function() {
      var res2 = Buffer.concat(response);
      res.send(JSON.parse(res2).query);

   });

});
app.listen(process.env.PORT || 3000);