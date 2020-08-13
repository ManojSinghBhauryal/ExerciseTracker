const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const userRoute = require('./routes/user')
const exerciseRoute = require('./routes/exercise')

require('dotenv').config();

const app = express()

app.use(cors())
app.use(express.json())

// const uri = process.env.URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
mongoose.connect('mongodb://127.0.0.1:27017/tracker', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })

mongoose.connection.once('open', () => {
    console.log("Connected to database...")
})


app.use('/user', userRoute)
app.use('/exercise', exerciseRoute)


app.listen(process.env.PORT || 5000, () => {
    console.log("Listening to port 5000")
})