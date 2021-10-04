const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')
const app = express()
const PRODUCT_DATA_FILE = path.join(__dirname,'server-product-data.json')
const CART_DATA_FILE = path.join(__dirname, 'server-cart-data.json')
const port = 3001

app.get('/',(req,res) => {
	res.send('Hello World')
})

app.get('/products', (req,res) => {
	console.log("app.get /products")
	fs.readFile(PRODUCT_DATA_FILE, (err,data) =>{
		res.setHeader('Cache-Control','no-cache')
		res.json(JSON.parse(data))
	})
})

app.get('/cart', (req, res) => {
  console.log("app.get /cart")
  fs.readFile(CART_DATA_FILE, (err, data) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
})

app.listen(port, () =>{
	console.log(`Example app listening at http://localhost:${port}`)
})
