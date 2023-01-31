const http = require('http')

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.end('hello welcome to home page')
    }
    if(req.url === '/about'){
        res.end('this is about')
    }

})

server.listen(5000);