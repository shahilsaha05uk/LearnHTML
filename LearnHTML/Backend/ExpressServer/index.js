import express from "express";
const app = express();  // creates an instance of express and return it
const port = 3000;


app.get("/", (req, res) =>{
    console.log(req.rawHeaders);
    res.send("<h1>This is my World</h1>");
})

app.get("/about", (req, res) =>{
    console.log(req.rawHeaders);
    res.send("<h1>About</h1>");
})

app.get("/contact", (req, res) =>{
    console.log(req.rawHeaders);
    res.send("<h1>Contact</h1>");
})

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}!!`);
    
})