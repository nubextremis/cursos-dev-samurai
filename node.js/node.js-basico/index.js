const express = require("express");
const server = express();

// 127.0.0.1
// localhost
// 3000

server.get("/hello", (req, res) => {
    return res.json({
        title: "Hello World!", 
        message: "Olá meu amigo, tudo bem?"});
});

//json['title']
// -> "Hello World"

server.listen(3000);
// 3000
// 5000
// 8000
// 8080
