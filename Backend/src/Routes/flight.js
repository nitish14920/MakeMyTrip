const express = require('express');
const Flight = require('../Models/flightsModel')
const router = express.Router();

router.get('/',async (req,res)=>{
    const flights = await Flight.find()
    res.json(flights)
})
router.post('/',async (req,res)=>{
    const flights = new Flight({
        title:req.body.title,
        time1:req.body.time1,
        time2:req.body.time2,
        stop:req.body.stop,
        price:req.body.price
    })
    try{

    
    const savedFlight = await flights.save()
    res.json(savedFlight)
    }
    catch{
        res.json({message:err})
    }
})
module.exports=router;
