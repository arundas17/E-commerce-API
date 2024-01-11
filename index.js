const express = require('express') 
const mongoose= require('mongoose')
const app = express() 
const userRouter=require('./routes/userouts')
const categoryRouter = require('./routes/catagoryroutes')
const productRouter = require('./routes/productsroutes')
const cors = require('cors')
const port = 3000 
require('dotenv').config()
app.use(cors())
app.use(express.json())
app.use("/users",userRouter)
app.use("/categories", categoryRouter)
app.use("/products", productRouter)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
}) 
main().then(()=>console.log("db connected")).catch(err => console.log(err));

async function main() 
 { await mongoose.connect(process.env.MONGO_DB);}