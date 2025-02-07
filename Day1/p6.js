const fs= require('fs');
const data="I am appended to the last.";
fs.appendFile("d.txt",data,(err)=>{
    if (err)
        console.log("Appedning of the file failed.");
    else
    console.log("Data appended to the file.");
})