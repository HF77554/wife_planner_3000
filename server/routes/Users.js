const express = require('express')
const router = express.Router()
const User = require('../models/user')
const encryption = require('../encryption')
const authenticateToken = require('../authenticateToken')

//get user making requests
router.get('/', authenticateToken, async (req, res) =>{
    try{
        const users = await User.find()
        res.json(users)
        //res.json(users.filter(u => u.username === req.user.name)[0])
    } catch (err) {
        res.status(500).json({message:err.message})
    }
})

//Get user based on ID
router.get('/:id', authenticateToken, getUser, async (req, res) =>{
    try{
        res.json(res.user)
    } catch (err) {
        res.status(500).json({message:err.message})
    }
})

//Updating User
router.patch('/:id',  authenticateToken, getUser, async (req, res) =>{
    
    //update username
    if (req.body.username != null) {
        res.user.username = req.body.username
    }
    //update userpassword
    if (req.body.userpassword != null) {
        res.user.userpassword = req.body.userpassword
    }
    //update delegatedRoomIDs
    if (req.body.delegatedRoomID != null) {
        res.user.delegatedRoomID = req.body.delegatedRoomID
    }

    //update User
    try {
        const updatedUser = await res.user.save()
        res.json(updatedUser)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }

})

router.delete('/:id', authenticateToken, getUser, async (req, res) =>{
    try{
        await res.user.remove()
        res.json({message: 'Deleted subscriber'})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

async function getUser(req, res, next) {
    let user;
    try {
        user = await User.findById(req.params.id)
        if (user == null){
            return res.status(404).json({ message: 'Cannot find subscriber' })
        } 
    } catch (err) {
        return res.status(500).json( { message: err.message } )
    }

    res.user = user
    next()
}

module.exports = (app) => {
    app.use('/users', router);
}