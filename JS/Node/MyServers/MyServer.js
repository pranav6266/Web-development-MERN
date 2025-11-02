// These are the requirements for creating a server.
const http = require("http");
const {parse} = require("node:url");

const HOST = "localhost";
const PORT = 8000;

const requestListener =  (request, response) => {
    console.log(request.url);
    switch (request.url) {
        case "/":
            const addr = "https://www.google.com/search?q=iit+kanpur&sca_esv=7f0bd&sxsrf=AE3T"
            let urlObj = parse(addr,true);
            console.log(urlObj);

            response.setHeader("Accepted", "text/plain");
            response.end("Welcome to the server!");
            break;
        case "/home":
            response.writeHead(200, {"Content-Type": "application/json"});
            response.end("Home Page");
            break;
        case "/About":
            response.end("About Page");
            break;
        case "/Contact":
            response.end("Contact Us Page");
    }
}

const server = http.createServer(requestListener);
server.listen(PORT,HOST,() => {
    console.log(`Server Running on: http://${HOST}:${PORT}`);
});