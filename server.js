require('dotenv').config()
const express = require('express')
const connectToDB = require('./db/db')
const userRouter = require('./routes/users')
const taskRouter = require('./routes/task.route')

// init DB
connectToDB()
//init Express
const app = express()
// Middle Ware
app.use(express.json())

// Routes
app.use('/api/users' , userRouter)
app.use('/api/task', taskRouter)



const port = process.env.PORT || 3000
app.listen(port , console.log(`Listening At Post ${port}`))
