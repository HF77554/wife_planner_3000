const express = require('express')
const router = express.Router()
const Room = require('../models/room')
const authenticateToken = require('../authenticateToken')

//See all available rooms
router.get('/', authenticateToken, async (req, res) =>{
    try{
        const room = await Room.find()
        res.json(room)
    } catch (err) {
        res.status(500).json({message:err.message})
    }
})

//Create a room
router.post('/create', authenticateToken, async (req, res) =>{
    const room = new Room({
        adminID: req.body.adminID,
        otherUserID: req.body.otherUserID,
        delegatedTasks: req.body.delegatedTasks
    })
    try {
        const newRoom = await room.save()
        res.status(201).json(newRoom)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

//Updating One room
/*router.patch('/:id',  authenticateToken, getRoom, async (req, res) =>{
    console.log(req.room.delegatedTasks)
    if (req.body.delegatedTasks != null) {
        const updatedTasks = res.room.delegatedTasks+[req.body.name]
        res.room.delegatedTasks = updatedTasks
    }
    try {
        const updatedRoom = await res.room.save()
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})*/

//Delete One room
router.delete('/:id', authenticateToken, getRoom, async (req, res) =>{
    try{
        await res.room.remove()
        res.json({message: 'Deleted room'})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

async function getRoom(req, res, next) {
    let room;
    try {
        room = await Room.findById(req.params.id)
        if (room == null){
            return res.status(404).json({ message: 'Cannot find room' })
        } 
    } catch (err) {
        return res.status(500).json( { message: err.message } )
    }

    res.room = room
    next()
}

module.exports = (app) => {
    app.use('/room', router);
}