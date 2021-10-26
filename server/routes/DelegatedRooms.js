const express = require('express')
const router = express.Router()
const delegatedRooms = require('../models/delegatedRoom')

router.get('/', async (req, res) =>{
    try{
        const delegatedRoom = await delegatedRooms.find()
        res.json(delegatedRoom)
    } catch (err) {
        res.status(500).json({message:err.message})
    }
})

router.post('/create', async (req, res) =>{
    const delegatedRoom = new delegatedRooms({
        adminID: req.body.adminID,
        delegatedTasks: req.body.delegatedTasks
    })
    try {
        const newRoom = await delegatedRoom.save()
        res.status(201).json(newRoom)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

module.exports = (app) => {
    app.use('/room', router);
}