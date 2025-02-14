const http = require("http");
const server = http.createServer((req, res) => {
    res.writeHead(200,{'content-type':'text/plain'});
    res.end('Hello World\n');//send response to the client
 });//with request we will give the request and response will be generated in response
server.listen(9000,()=>{
    console.log("server is running on port 9000");
})//ports are the number which are used to connect the server and client and we cannot w=connnect to the port which is previously acquired
