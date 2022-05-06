const http = require('http');


const server = http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('Hello dude, i am a response')
})


server.listen(8181,'127.0.0.1')
console.log('Server is listening on port 8181')