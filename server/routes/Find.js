const express = require('express')
const router = express.Router()
const User = require('../models/user')
const authenticateToken = require('../authenticateToken')

//Get user based on Email
router.get('/:email', authenticateToken, async (req, res) =>{
    try{
        const users = await User.find()
        res.json(users.filter(u => u.email === req.params.email)[0])
    } catch (err) {
        res.status(500).json({message:err.message})
    }
})

module.exports = (app) => {
    app.use('/find', router);
}