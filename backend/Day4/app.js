const express=require('express');
const app=express();
let users=[];
app.get('/api/users',(req,res)=>{
    res.json(users);
})
app.use(express.json())
app.get('/users',(req,res)=>{
    res.send('Welcome to Backend server using express');
})
app.post('/users',(req,res)=>{
    const data=req.body;
    const newid=users.length>0?users[users.length-1].id+1:1;
    data.id=newid;
    users.push(data);
    res.status(200).json({message:'data received',data:data});
})
app.listen(9000,(err)=>{
    if(err)
        console.log(err)
    console.log("Server is running on port http://localhost:9000/users")
    console.log("Server is running on port http://localhost:9000/api/users")
})