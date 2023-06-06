var express = require('express');
var router = express.Router();

const {products,selectedProduct} =require('../controller/products')

/* GET home page. */
router.get('/',(req,res)=>{
    res.send('WELCOME')
})
router.get('/api/products/list',products)
router.get('/api/products/:id',selectedProduct)

module.exports = router;
