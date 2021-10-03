const express = require('express');
const Airport = require('../Models/airportModel')
const router = express.Router();

router.get('/',async (req,res)=>{
    const airports = await Airport.find()
    res.json(airports)
})

module.exports=router;
