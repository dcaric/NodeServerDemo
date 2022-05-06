const express = require('express');
const app = express();

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


const PORT = process.env.PORT || 3000
app.listen(PORT)