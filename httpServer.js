/*import http from "http";
const server = http.createServer((req,res)=>{

    res.end("Hello Server");
    const url=req.url;
    const method=req.method;
    if(url=="/msg" && method == "GET"){
        res.end("this is welcome message from server");

    }
    else if(url="/sys" && method=="GET"){
        res.end("This is sysytem information ");
    }

});
server.listen(3000,()=>{
    console.log("server is running on port number 3000");
});*/


import http from "http";

const userdata = [
    {
        id: 1,
        name: "cm"
    }
];

const server = http.createServer((req, res) => {

    const url = req.url;
    const method = req.method;

    if (url === "/msg" && method === "GET") {
        res.end("This is welcome message from server");
    }
    else if (url === "/sys" && method === "GET") {
        res.end("This is system information");
    }
    else if (url === "/data" && method === "GET") {
        res.statusCode = 201;
        res.end(JSON.stringify(userdata));
    }
    else {
        res.statusCode = 404;
        res.end("Page not found");
    }

});

server.listen(3000, () => {
    console.log("Server is running on port number 3000");
});
