const http=require('http');
const server=http.createServer(async(req,res)=>{
    const data=await fetch("https://dummyjson.com/products");
    const jsondata=await data.json();
    const products=jsondata.products;
    res.writeHead(200,{'content-type':'application/json'});
    const titles=products.map((ele)=>{
        return ele.title;
    });
    res.end(JSON.stringify(titles));

})
server.listen(3000,(err)=>{
    if (err) throw err;
    else
    console.log("Server is running on port http://localhost:3000")
})