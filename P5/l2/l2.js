const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const axios = require("axios");

// var tableData = document.getElementById("data");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  const data = fs.readFileSync("index.html");

  const dataApi = () => {axios
    .get("https://picsum.photos/v2/list")
    .then((response) => {
        return response
    })
    .catch((error) => {
      console.log(error);
    });
}

  res.write(dataApi())
  res.end(data);
});

server.listen(port, hostname, () => {

    
//   console.log(`Server running at ${hostname}:${port}`);
});
