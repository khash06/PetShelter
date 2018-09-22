const express = require('express');
const path = require('path');
const trans = require('./server/routes');

const app = express();
trans(app);

app.use(express.static( __dirname + '/client/dist/client' ));
app.all("*", (req, res, next)=> {
    res.sendFile(path.resolve("./client/dist/client/index.html"))
});

app.listen(8000, function(){
    console.log("listening on 8000");
})