const fs = require("fs");

fs.writeFile("message2.txt", "Hello World This file will be read from!!", (err)=>{
    if(err) throw err;
    console.log("File has been saved!!");
});

fs.readFile("message2.txt", "utf8", (err, data)=>{
    if(err) throw err;
    console.log(data);
})