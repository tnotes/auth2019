const express = require('express');
const app = express();
app.get('/',(req,res)=>{
    res.send(true)
});
app.listen(3000 || process.env.PORT);