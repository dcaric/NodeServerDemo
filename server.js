const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

// middlewares
app.use('/css',express.static(__dirname+'/public/css'));
app.use('/',(req,res,next)=>{
    console.log('someone made a request for:'+ req.url)
    res.cookie('cookieName','cookieValue')
    next();
})


app.get('/',(req,res)=>{
    res.send(`
        <html>
            <head>
                <link type="text/css" rel="stylesheet" href="/css/styles.css">
            </head>
            <body>
                <h1>Hello !!</h1>
            </body>
        </html>
    `)
});


const jsonParser = bodyParser.json()
const urlencodedParser = bodyParser.urlencoded({extended:false})


app.get('/user',(req,res)=>{
    let HTML = fs.readFileSync(`${__dirname}/views/user.html`);
    res.send(`${HTML}`)
})

app.post('/api/adduser',jsonParser,(req,res)=>{
    console.log(req.body);
    res.sendStatus(200);
})


app.get('/querystring',(req,res)=>{
    let HTML = fs.readFileSync(`${__dirname}/views/querystring.html`);
    res.send(`${HTML}`)
})

app.post('/api/queryadd',urlencodedParser,(req,res)=>{
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    console.log(firstname + ' ' + lastname)

    res.sendStatus(200);
})




app.get('/api/:user/:id',(req,res)=>{
    let id = req.params.id;
    let user = req.params.user
    res.send(`
        <html>
            <body>
                <h1>The user name is ${user} and the id is ${id}</h1>
            </body>
        </html>
    `)
})

///  hhh.com/car?brand=ford&year=2022
app.get('/api/car',(req,res)=>{
    let brand = req.query.brand;
    let year = req.query.year;

    res.send({
        brand,
        year
    })
})


const PORT = process.env.PORT || 3001
app.listen(PORT)