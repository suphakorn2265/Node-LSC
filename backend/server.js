const express = require("express");
const http = require("http");
const server = express();
const PORT = process.env.PORT||3345;

http.createServer(server).listen(3345, function(){
    console.log(`Server is running on port : ${PORT}`);
});

server.get('/', (req, res)=>{
    res.send(`Successful on port >> ${PORT}`);
});

module.exports(server);