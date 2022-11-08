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
        const response = results
        const customers = {
            "status": res.statusCode,
            "error": err,
            "response": response
        }
        res.json(customers)
    })
})

app.get('/api/customer/:nama', (req, res) => {
    let querySQL = "SELECT * FROM `customers` WHERE  cust_name = '"+req.params.nama+"' "
    let exeQuery = conn.query(querySQL, (err, results) => {
        const response = results
        const customer = {
            "status": res.statusCode,
            "error": err,
            "response": response
        }
        res.json(customer)
    })
})

app.get('/api/products', (req, res) => {
    let querySQL = "SELECT * FROM `products`"
    let exeQuery = conn.query(querySQL, (err, results) => {
        
        const response = results
        const products = {
            "status": res.statusCode,
            "error": err,
            "response": response
        }
        res.json(products)
    })
})

app.get('/api/product/:id', (req, res) => {
    let querySQL = "SELECT * FROM `products` WHERE product_id = '"+req.params.id+"' "
    let exeQuery = conn.query(querySQL, (err, results) => {
        
        const response = results
        const product = {
            "status": res.statusCode,
            "error": err,
            "response": response
        }
        res.json(product)
    })
})

app.listen(port, () => {
    console.log(`Server running at ${hostname}:${port}`);
})