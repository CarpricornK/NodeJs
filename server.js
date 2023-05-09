const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('Server is running on port 8080')
})

app.get('/pet', function(req, res){
    res.send('Hello, pet')
})

app.get('/htmltest' , function(req, res){
    res.sendFile(__dirname + '/index.html')
})