import express from 'express';
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const host = "127.0.0.1";
const port = 8081;

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.sendFile(__dirname+'/public/home.html');
});

app.get('/home', (req, res) => {
    res.sendFile(__dirname+'/public/home.html');
});

app.get('/trial', (req, res) => {
    res.sendFile(__dirname+'/public/trial.html');
});

app.get('/special', (req, res) => {
    res.sendFile(__dirname+'/public/special.html');
});

app.get('/popular', (req, res) => {
    res.sendFile(__dirname+'/public/popular.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname+'/public/about.html');
});




app.listen(port, () => {
    console.log(`Server running at ${host}:${port}`);
})