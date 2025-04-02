const fs= require('fs');
const data=fs.readFile("d.txt","utf8",(err,data)=>{
    if(err){
        console.log("Error reading theis file.",err);
    }
        console.log(data);
});