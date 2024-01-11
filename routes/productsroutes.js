const express = require('express')
const {newProduct,getAllProducts,productUpdate,deletedProduct,getProductById} = require("../controlers/productcontroler")
const router = express.Router();

router.get('/allproducts', getAllProducts)

router.get('/getproductbyid/:id', getProductById)

router.post('/newproduct' , newProduct)

router.patch('/updatedproduct/:id', productUpdate)

router.delete('/deletedproduct/:id', deletedProduct)

module.exports = router;