const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const fs = require('fs')
const server = http.createServer((req, res) => {
    // res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    let data = ""
    // let fullPath = req.url
    // let arrPath = fullPath.split("/");
    // // let uri1 = arrPath[0]
    // res.end(fullPath.split("/"))
    if (req.url == "/admin") {
         data = fs.readFileSync('admin/index.html')
    }
    else if (req.url == "/user") {
         data = fs.readFileSync('user/index.html')
    } else {
        res.end("Hello HTTP Server")
    }
    res.end(data)
});
server.listen(port, hostname, () => {
    console.log(`Server running at ${hostname}:${port}`);
})