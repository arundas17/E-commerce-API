const express = require('express')
const {signUp,userList,userDelete,userUpdate}=require("../controlers/usercontroler")

const router = express.Router()

router.post('/signup',signUp) 
router.get('/userlist', userList)

router.delete('/userdelete/:id', userDelete)

router.patch('/userupdate/:id', userUpdate)


module.exports = router