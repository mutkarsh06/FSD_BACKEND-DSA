const fs=require('fs');
fs.rmdir('./Myfolder', (err)=>{
    if(err) throw err;
    console.log('Foler Deleted Sucessfully.');
})