const http=require('http')
const fs=require('fs/promises')
const server=http.createServer(async (req,res)=>{
    res.writeHead(200,{'content-type':'application/json'})
    const data=await fs.readFile('users.json')
    res.end(data)

})
server.listen(4000,(err)=>{
    if(err)
        console.log(err)
    console.log("Server is running on port 4000")
})