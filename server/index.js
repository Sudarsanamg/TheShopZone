const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())
app.use(express.json())
require('dotenv').config()




app.get('/', (req, res) => res.send('Hello World!'))
app.listen(process.env.PORT, () => console.log(`Server is listening ....`))