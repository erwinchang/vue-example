const express = require('express')
const fs = require('fs')
const path = require('path')
const app = express()
const PRODUCT_DATA_FILE = path.join(__dirname,'server-product-data.json')
const port = 3001

app.get('/',(req,res) => {
	res.send('Hello World')
})

app.get('/product', (req,res) => {
	fs.readFile(PRODUCT_DATA_FILE, (err,data) =>{
		res.setHeader('Cache-Control','no-cache')
		res.json(JSON.parse(data))
	})
})

app.listen(port, () =>{
	console.log(`Example app listening at http://localhost:${port}`)
})