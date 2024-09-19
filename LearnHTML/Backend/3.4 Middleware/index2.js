import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/",(req, res) =>{
  req.hostname
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
