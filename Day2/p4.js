const http=require('http')
const User=[
    {id:1,name:'Utkarsh Mishra',age:22},
    {id:2,name:'Rahul Mishra',age:25},
    {id:3,name:'Shreyansh Chauhan',age:25},
];
const server=http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'application/json'});
    const names=User.map((user)=>{
        return user.name;
    });
    res.end(JSON.stringify(names))
})
server.listen(4000,(err)=>{
    if (err)
    console.log(err)
console.log('server is running on port 4000');
})