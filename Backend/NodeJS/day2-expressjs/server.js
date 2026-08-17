let http = require("http");

let server = http.createServer((req, res) =>{
    console.log("hey....");
    res.end("mil gaya");
});

server.listen(3000,()=>{
    console.log("Server chalu he londooo");
});