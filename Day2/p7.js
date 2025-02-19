const http=require('http')
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'text/plain'});
    if(req.url=='/home'){
        res.end('Welcome to home page');
    }
    else if(req.url=='/about'){
        res.end('Welcome to about page');
    }
    else if(req.url=='/contact'){
        res.end('Welcome to contact page');
    }
    else{
        res.end("Page Not Found");
    }
})
server.listen(3000,()=>{
    console.log("Server is running on port http://localhost:3000")
})