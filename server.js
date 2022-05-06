const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send(`
        <html>
            <body>
                <h1>Hello !!</h1>
            </body>
        </html>
    `)
});

app.get('/api/user',(req,res)=>{
    res.send({
        name:"Francis",
        lastname:"Jones"
    })
})

const PORT = process.env.PORT || 3000
app.listen(PORT)