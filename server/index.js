   const express = require('express')
const app = express()



const cors = require('cors')
const connectDB=require('./connectDB')
// const allowedOrigin = 'https://the-shop-zone-git-main-sudarsanam-gs-projects.vercel.app';

// app.use(cors({
//     origin: allowedOrigin,
//     methods: ['GET', 'POST', 'PUT', 'DELETE'], // Define allowed methods if needed
//     credentials: true // Allow credentials (e.g., cookies) if necessary
// }));

app.use(cors())
app.use(express.json())
require('dotenv').config()
const accountRouter=require('./routes/accountRoutes')
const productRouter=require('./routes/productRouter')
const orderRouter=require('./routes/ordersRoutes')


connectDB();


app.use('/accounts',accountRouter)
app.use('/products',productRouter)
app.use('/orders',orderRouter)


app.get('/', (req, res) => res.send('Hello World!'))




app.listen(process.env.PORT, () => console.log(`Server is listening ....`))