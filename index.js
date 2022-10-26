const express = require('express')
const stockRouter = require('./routes/stock')

const app = express()

app.use(express.json())

app.use('/stock', stockRouter)

app.listen(5000, () => {
    console.log('Server is running on port 5000')
})