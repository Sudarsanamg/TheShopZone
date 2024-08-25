const express = require('express')
const app = express()



const cors = require('cors')
const connectDB=require('./connectDB')
app.use(cors())
app.use(express.json())
require('dotenv').config()
const accountRouter=require('./routes/accountRoutes')
const productRouter=require('./routes/productRouter')


connectDB();


app.use('/accounts',accountRouter)
app.use('/products',productRouter)


app.get('/', (req, res) => res.send('Hello World!'))




app.listen(process.env.PORT, () => console.log(`Server is listening ....`))