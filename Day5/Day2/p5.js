const http=require('http')
const fs=require('fs/promises')
const server=http.createServer(async (req,res)=>{
    const data=await fs.readFile('./users.json');
    const mydata=JSON.parse(data)
    res.statusCode=200
    res.setHeader('content-type','application/json');
    const names=mydata.map((ele)=>{
        return ele.name
    })
    console.log(JSON.stringify(names));
    res.end(JSON.stringify(names));
})
server.listen(4000,(err)=>{
    if(err)
        console.log(err)
    console.log("Server is running on port http://localhost:4000")
})
