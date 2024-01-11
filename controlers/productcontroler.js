const Product = require("../models/productmodel")
const newProduct = async (req,res) => {
    const data = req.body
    const newProduct = new Product(data)
    try {
        await newProduct.save()
        res.json(newProduct)  
    } catch (error) {
        console.log(error.message)
    }
}
const getAllProducts =  async(req,res) => {
    
    try {
        const products = await Product.find({});
        res.json(products);
      } catch (error) {
        res.status(500).json({ message:error.message });
    }
  }

const getProductById = async (req, res) => {
  try {
      const product = await Product.findById(req.params.id);
      res.json(product);
  }catch(error){
      res.status(404).json({message: error.message});
  }
}





const productUpdate = async (req,res) => {
  const productId = req.params.id;
  const data = req.body
  try {
      const updatedProduct =await Product.findByIdAndUpdate(productId, data, {new:true})
  res.json(updatedProduct)
} catch (error) {
    console.log(error.message);
}
}
const deletedProduct = async (req,res) => {
const productId = req.params.id
try {
    await Product.findByIdAndDelete(productId)
    res.status(200).send("product successfully deleted")
} catch (error) {
    res.status(400).send({ message: error.message });
}
}


module.exports = {
newProduct,
getAllProducts,
productUpdate,
deletedProduct,
getProductById
}