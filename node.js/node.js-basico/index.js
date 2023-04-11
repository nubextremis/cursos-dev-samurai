const express = require("express");
const server = express();

// http://localhost:3000/hello?nome=Felipe&idade=21
// Query params = ?nome=Felipe&idade=21



// 127.0.0.1
// localhost
// 3000

server.get("/hello", (req, res) => {
    const { nome, idade } = req.query;
    
    return res.json({
        title: "Hello World!", 
        message: `Olá ${nome}, tudo bem?`,
        idade: idade
    });
});

//json['title']
// -> "Hello World"

// http://localhost:3000/hello/felipe
// Route params = /hello/:nome

server.get("/hello/:nome/", (req, res) => {
    const { nome } = req.params;

    return res.json({
        title: "Hello World!",
        message: `Olá ${nome}, tudo bem?`
    })
})

server.listen(3000);
// 3000
// 5000
// 8000
// 8080
