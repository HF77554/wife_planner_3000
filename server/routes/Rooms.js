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

//Get room based on ID
router.get('/:id', authenticateToken, getRoom, async (req, res) =>{
    try{
        res.json(res.room)
    } catch (err) {
        res.status(500).json({message:err.message})
    }
})

//Create a room
router.post('/create', authenticateToken, async (req, res) =>{
    const room = new Room({
        adminID: req.body.adminID,
        otherUserID: req.body.otherUserID,
        roomName: req.body.roomName
    })
    try {
        //const rooms = await Room.find()
        //if (users.filter(u => u.username === req.user.name)[0])
        const newRoom = await room.save()
        res.status(201).json(newRoom)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

//Updating One room
router.patch('/:id',  authenticateToken, getRoom, async (req, res) =>{

    //update roomName
    if (req.body.roomName != null) {
        res.user.roomName = req.body.roomName
    }
    //update otherUserAcceptance
    if (req.body.otherUserAcceptance != null) {
        res.user.otherUserAcceptance = req.body.otherUserAcceptance
    }

    //update delegatedTasks
    if (req.body.delegatedTasks != null) {
        res.user.delegatedTasks = req.body.delegatedTasks
    }
    
    try {
        const updatedRoom = await res.room.save()
        res.json(updatedRoom)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

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