const fs =require('fs')
// const data=fs.readFileSync("./d.txt") buffer
const data=fs.readFileSync("./d.txt", "utf8") //string format


console.log(data)