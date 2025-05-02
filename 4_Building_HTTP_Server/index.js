// const http = require("http");
// const fs = require("fs");

// const myServer = http.createServer((request, response) => {
//     const log = `${Date.now()}: ${request.url} New Req Received\n`;
//     fs.appendFile("log.txt", log, (err, data) => {
//         response.end("Hello From Server...");
//     })
// });

// myServer.listen(8000, () => console.log("Server Started!"));




const http = require("http");
const fs = require("fs");

const myServer = http.createServer((request, response) => {
    const log = `${Date.now()}: ${request.url} New Req Received\n`;
    fs.appendFile("log.txt", log, (err, data) => {
        switch(request.url){
            case '/':
                response.end("Home Page");
                break;
            case '/about':
                response.end("I am Dheeraj Kumar");
                break;
            default:
                response.end("404 Not Found")
        }
    })
});

myServer.listen(8000, () => console.log("Server Started!"));