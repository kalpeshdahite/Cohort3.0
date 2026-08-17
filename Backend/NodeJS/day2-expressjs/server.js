// let http = require("http");

// let server = http.createServer((req, res) =>{
//     if (req.url==="/users") {
//         res.end("me users me hu bhai");
//     }
//     else{
//         res.end("Kya haal chal bhai");
//     }
// });

// server.listen(3000,()=>{
//     console.log("Server chalu he londooo");
// });


const express = require("express");

const app = express();

app.get('/',(req,res)=>{
    res.send("padhh llleeeeeee");
});

app.listen(3000, ()=>{
    console.log("Server is running on 3000");
});
