const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const path = require('path')
const app = express()
const PRODUCT_DATA_FILE = path.join(__dirname,'server-product-data.json')
const CART_DATA_FILE = path.join(__dirname, 'server-cart-data.json')
const port = 3001

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  console.log("app.use");
  next();
});

app.post('/cart', (req, res) => {
	fs.readFile(CART_DATA_FILE, (err,data) => {
		const cartProducts = JSON.parse(data);

		const newCartProduct = {
			id: req.body.id,
			title: req.body.title,
			description: req.body.description,
			price: req.body.price,
			image_tag: req.body.image_tag,
			quantity: 1
		}

		let cartProductExists = false
		cartProducts.map( (cartProduct) => {
			if (cartProduct.id === newCartProduct.id ) {
				cartProduct.quantity++
				cartProductExists = true
			}
		})

		if(!cartProductExists) cartProducts.push(newCartProduct);
		fs.writeFile(CART_DATA_FILE, JSON.stringify(cartProducts,null, 4), () => {
			res.setHeader('Cache-Control', 'no-cache')
			res.json(cartProducts)
		})
	})
})

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
