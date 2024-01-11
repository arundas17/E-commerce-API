const Category = require("../models/catagorymodel")

const test1 = (req,res) => {
    res.send("API WORKING")
}
const saveCategory =  async (req, res) => {
    const category = new Category(req.body);
    try {
        const insertedCategory = await category.save();
        res.status(201).json(insertedCategory);
    }catch(error){
        res.status(400).json({message: error.message});
    }
}

const allCategories = async(req,res) => {
    

    try {
        const categories = await Category.find({});
        res.json(categories);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
 }

 const getCategoryById = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        res.json(category);
    }catch(error){
        res.status(404).json({message: error.message});
    }
}


 const categoryDelete = async (req,res) => {
    const categoryId = req.params.id
    try {
        await Category.findByIdAndDelete(categoryId)
        res.status(200).send("category successfully deleted")
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}



const categoryUpdate =async (req,res) => {
    const categoryId = req.params.id;
    const data = req.body
    try {
        const updatedCategory =await Category.findByIdAndUpdate(categoryId, data, {new:true})
    res.json(updatedCategory)
    } catch (error) {
        console.log(error.message);
    }
}
module.exports = {
    test1,
    saveCategory,
    allCategories,
    getCategoryById,
    categoryDelete,
    categoryUpdate,
}