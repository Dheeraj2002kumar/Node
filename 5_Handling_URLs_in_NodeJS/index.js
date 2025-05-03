
// const http = require("http");
// const fs = require("fs");
// const url = require("url");

// const myServer = http.createServer((request, response) => {
//     if (request.url === "/favicon.ico") {
//         return response.end;
//     }

//     const log = `${Date.now()}: ${request.url} New Req Received\n`;
//     const myUrl = url.parse(request.url);
//     console.log(myUrl);
//     fs.appendFile("log.txt", log, (err, data) => {
//         switch(request.url){
//             case '/':
//                 response.end("Home Page");
//                 break;
//             case '/about':
//                 response.end("I am Dheeraj Kumar");
//                 break;
//             default:
//                 response.end("404 Not Found")
//         }
//     })
// });

// myServer.listen(8000, () => console.log("Server Started!"));











const http = require("http");
const fs = require("fs");
const url = require("url");

const myServer = http.createServer((request, response) => {
    if (request.url === "/favicon.ico") {
        return response.end;
    }

    const log = `${Date.now()}: ${request.method} ${request.url} New Req Received\n`;
    const myUrl = url.parse(request.url, true);
    console.log(myUrl);

    fs.appendFile("log.txt", log, (err, data) => {
        switch(myUrl.pathname){
            case '/':
                if (request.method === "GET") response.end("HomePage");
                break;
            case '/about':
                const userName = myUrl.query.myname;
                response.end(`Hii, ${userName}`);
                break;
            case '/search':
                const search = myUrl.query.search_query;
                response.end("Here are your result for " + search);
                break;
            case "/signup":
                if (request.method === 'GET') response.end("This is a signup form");
                else if (request.method === 'POST') {
                    // DB Query
                    response.end("Success");
                }
            default:
                response.end("404 Not Found")
        }
    })
});

myServer.listen(8000, () => console.log("Server Started!"));










