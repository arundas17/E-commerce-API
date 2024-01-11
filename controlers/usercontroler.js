const User=require("../models/usermodel")
const signUp = async(req,res) => {
    const {username, email, password} = req.body
    const newUser = new User({username,email,password});
    try {
        await newUser.save()
        res.json(newUser)
    } catch (error) {
        console.log(error);
    } 
}
const userList = async(req,res) => {
   const data = await User.find({})
   res.status(200).json(data)
}

const userDelete = async (req,res) => {
    const userId = req.params.id
    try {
        await User.findByIdAndDelete(userId)
        res.status(204).send("user successfully deleted")
    } catch (error) {
        console.log(error);
    }
}

const userUpdate = async (req,res) => {
    const userId = req.params.id;
    const data = req.body
    try {
        const updatedUser =await User.findByIdAndUpdate(userId, data, {new:true})
    res.json(updatedUser)
    } catch (error) {
        console.log("you can only change your own details", error.message);
    }
}
module.exports = {
    
    signUp,
    userList,
    userDelete,
    userUpdate,
}