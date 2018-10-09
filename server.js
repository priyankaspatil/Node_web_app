const express = require('express');
const fs = require('fs');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

/* app.use((req,res,next)=>{
    res.render('maintenance.ejs');
}) */

app.use((req, res, next)=>{
    var log = new Date().toString();
    fs.appendFile('server.log',log)
    log =log + req.method + req.path;
    next();
});

app.get('/', (req, res)=>{
    res.send('<h1>hi everyone</h1>');
})

app.get('/user', (req, res)=>{
    /* res.send({
        name: "Priyanka",
        address: "FIGmd"
    }); */
    res.render('home.ejs',{
        pagetitle: 'Training',
        username: 'Priyanka'
    })
})

app.listen(3000, ()=>{
    console.log('Server is started at port 3000');
})