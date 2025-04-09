const fs=require('fs')
const express=require("express")
const app=express()
app.use(express.json());
let users=[]
// app.post("/api/users",(req,res)=>{
//     const newuser=req.body;
//     fs.readFile("./data.json","utf-8",(err,data)=>{
//         if(err)
//             console.log(err)
//         let users= JSON.parse(data);
//         users.push(newuser);
//     fs.writeFile("./data.json",JSON.stringify(users,null,2),(err)=>{
//         if (err)
//             console.log(err)
//         res.status(200).json({message:'data received',data:newuser});
//         })
//     })
// })
const readdata=async()=>{
   users = await fs.readFile('./data.json',"utf8")
}
const writedata=()=>{
    fs.writeFile('./data.json',JSON.stringify(users,null,2))
}
app.get('/getdata',async (req,res)=>{
    readdata();
    res.json(users);
})
app.post('/users',(req,res)=>{
    const {name,age}=req.body;
    const newid=users.length>0?users[users.length-1].id+1:1;
    const newuser={id:newid,name,age};
    users.push(newuser);
    writedata();
    res.status(201).json({message:'User Registered Sucessfully',data:newuser});
})
app.put('/users/:id/',(req,res)=>{
    const uid=  
})
app.listen(9000,(err)=>{
    if(err)
        console.log(err)
    console.log("Server is running on port http://localhost:9000/getdata")
})