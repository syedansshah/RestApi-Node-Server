const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());


const port = process.env.PORT || 8089;

process.on("uncaughtException",(err)=>{
    console.error(err)
})

app.listen(port, ()=>{
    console.log(`REST API Server listening on Port: ${port}`)
})