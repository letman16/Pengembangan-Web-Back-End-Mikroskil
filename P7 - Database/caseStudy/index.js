import express from 'express';
import mysql2 from 'mysql2';

const app = express();

const conn = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'store_db'
});

const hostname = '127.0.0.1';
const port = 3000;

conn.connect( err => {
    if(err){
        console.error("Database is disconnect!");
        console.error(err);
    }else{
        console.log("Database is connected!");
    }
})

app.get('/api/customers', (req, res) => {
    let querySQL = "SELECT * FROM `customers`"
    let exeQuery = conn.query(querySQL, (err, results) => {
        res.json(results);
    })
})

app.get('/api/customer/:nama', (req, res) => {
    let querySQL = "SELECT * FROM `customers` WHERE  cust_name = '"+req.params.nama+"' "
    let exeQuery = conn.query(querySQL, (err, results) => {
        res.json(results);
    })
})

app.get('/api/products', (req, res) => {
    let querySQL = "SELECT * FROM `products`"
    let exeQuery = conn.query(querySQL, (err, results) => {
        
        const response = results
        const product = {
            "status": 200,
            "error": null,
            "response": response
        }
        res.json(product)
    })
})

app.get('/api/product/:nama', (req, res) => {
    let querySQL = "SELECT * FROM `products` WHERE product_name = '"+req.params.nama+"' "
    let exeQuery = conn.query(querySQL, (err, results) => {

        const response = results
        const product = {
            "status": 200,
            "error": null,
            "response": response
        }
        res.json(product)
    })
})

app.listen(port, () => {
    console.log(`Server running at ${hostname}:${port}`);
})