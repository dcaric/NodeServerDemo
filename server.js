const http = require('http');
const fs = require('fs')

// let HTML = fs.readFileSync(`${__dirname}/index.html`)
const names = ["francis","james","Rob"]
const cars = {
    name:"Ford",
    model:"Fiesta"
}


const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    const json = JSON.stringify({
        names,
        cars
    })
    res.end(json)
})


server.listen(8181,'127.0.0.1')
console.log('Server is listening on port 8181')