const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require('bcrypt')

router.post('/', getUsername, async (req, res) => {
    try {
        if(await bcrypt.compare(req.body.userpassword, res.user.userpassword)){
            res.send('Success')
        } else {
            res.send('Not Allowed')
        }

    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

async function getUsername(req, res, next) {
    let user;
    try {
        user = await User.find({username: req.body.username})
        if (user === null){
            return res.status(404).json({ message: 'Cannot find subscriber' })
        } 
        
    } catch (err) {
        return res.status(500).json( { message: err.message } )
    }

    res.user = user[0]
    next()
}

module.exports = (app) => {
    app.use('/users/login', router);
}