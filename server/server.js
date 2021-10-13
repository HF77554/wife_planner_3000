require('dotenv').config()
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = 3000


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true  })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

app.use(express.json())

const userRouter = require('./routes/users')
app.use('/users', userRouter)

app.listen(port, () => {
  console.log(`Server is running`)
})