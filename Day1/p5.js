const fs= require('fs');
const data="I am a new async Data File.";
fs.writeFile(  "d.txt",data, (err)=>{
    if (err)
        console.log("Error while writing this  file.",err);
    else
        console.log("File Written updated successfully.");

}
)