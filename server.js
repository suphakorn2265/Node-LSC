const express = require("express");
// const http = require("http");
// const https = require("https");
const server = express();
const PORT = process.env.PORT||3345;

// http.createServer(server).listen(3345, function(){
//     console.log(`Server is running on port : ${PORT}`);
// });

server.get('/', (req, res) =>{
    res.send('/frontend/home.html');
});

server.listen(3345, (req, res)=>{
    console.log(`Server is running on port : ${PORT}`);
})

module.exports(server);