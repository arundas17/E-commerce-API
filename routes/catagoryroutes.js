const express = require('express')
const {test1,saveCategory,allCategories,getCategoryById,categoryDelete,categoryUpdate} = require("../controlers/catagorycontroler")
const router = express.Router();

router.get('/test1', test1)

router.post('/savecategory' , saveCategory)

router.get('/allcategories', allCategories)

router.get('/getcategorybyid/:id', getCategoryById);

router.delete('/categorydelete/:id', categoryDelete)

router.patch('/categoryupdate/:id', categoryUpdate)

// test
module.exports=router;