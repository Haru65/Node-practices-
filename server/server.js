const http = require("http");
const fs = require("fs");
const url = require("url");

const server = http.createServer((req, res) => {
    if (req.url === "/favicon.ico") return res.end();

    // Parse the URL for routing
    const myurl = url.parse(req.url, true);
    console.log(myurl.query);

    // Handle routing
    switch (myurl.pathname) {
        case "/":
            res.end("homepage");
            break;
        case "/about":
            res.end("vuerw9vijeqvojeivh-eiojvdahvbvye79qvhgidbvuehn");
            break;

        case "/search":
            const result = myurl.query.search_query;
            res.end("here is ur result " + result)
            break;
        default:
            res.end("404");
            break;
    }

    // Log the request independently
    const log = `${Date.now()}: ${req.url}: new request received \n`;
    fs.appendFile("text.txt", log, (err) => {
        if (err) console.error("Failed to log request:", err);
    });
});

server.listen(8000, () => console.log("Server started on port 8000"));
