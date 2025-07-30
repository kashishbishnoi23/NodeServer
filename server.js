const express = require("express");

const app = express(); // creates the server -> app

const port = 80;

app.listen(port, ()=>{
    console.log("Server is running on port " , port);
}) // now my node.js services listens on port (3000) on my machine 


app.use(express.static("frontend")); // jab browser get request bhejega for static files (index.html, style.css etc) -> express will look for static files in public -> send them from here



