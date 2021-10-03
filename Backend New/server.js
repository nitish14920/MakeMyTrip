require('dotenv').config()
const express = require("express")
const bodyParser = require('body-parser')
const app = express()
const mongoose = require("mongoose")
const flightRoute = require('./Routes/flight')
const airportRoute = require('./Routes/airports')

mongoose.connect(process.env.DATABASE_URL,{ useNewUrlParser: true},()=>{console.log("connected")})

app.use(bodyParser.json())

// Middleware for flightRoutes
app.use('/flights',flightRoute)
app.use('/airports',airportRoute)


app.listen(3002,()=> console.log("Listening on 3002"))