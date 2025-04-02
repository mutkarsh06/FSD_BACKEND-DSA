const http= require('http');
const fs=require('fs/promises');
const server=http.createServer(async (req,res)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/html');
    const data=await fs.readFile('index.html');
    res.end(data);
});
server.listen(4000,(err)=>{
    if (err)
        console.log(err)
    console.log('server is running on port 4000');
})
