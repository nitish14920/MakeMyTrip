const express = require('express')
const connect = require('./Config/db')
const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())


const operatorController = require('./Controller/operator.controller')
app.use('/operator',operatorController)


const boardController = require('./Controller/boarding.controller')
app.use('/board',boardController)


const dropController = require('./Controller/drop.controller')
app.use('/drop',dropController)


const fromController = require('./Controller/from.controller')
app.use('/from',fromController)



const toController = require('./Controller/to.controller')
app.use('/to',toController)




const flightController = require('./Controller/flight.controller')
app.use('/flight',flightController)


const bookingController = require("./Controller/booking.controller")
app.use("/bookings", bookingController)



const customerController = require("./Controller/customer.controller")
app.use("/customers", customerController)

app.listen(PORT, async () => {
    await connect()
    console.log(`Server started at ${PORT} Port`)
})