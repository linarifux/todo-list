const express = require('express')
require('dotenv').config()
const cors = require('cors')
const app = express()

// routers
// todo router
const todoRoute = require('./routes/todoRoute')

// user router
const userRouter = require('./routes/userRoute')

// db
const connectToDb = require('./db/db')

/// port
const port = process.env.PORT || 5000

// middlewares
app.use(cors())
app.use(express.json())


// routes
// todo route
app.use('/todo', todoRoute)

// user route
app.use('/user', userRouter)



// db connection
connectToDb()


// starting server
app.listen(port, () => {
    console.log('Server started listening on port: ', port);
})