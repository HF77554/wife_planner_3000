require('dotenv').config()
const express = require('express')
const router = express.Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

router.post('/', getUserInfo, async (req, res) => {
    try {
        if(await bcrypt.compare(req.body.userpassword, res.user.userpassword)){
            const username = { name: res.user.username };
            const accessToken = generateAccessToken(username)
            res.json({accessToken:accessToken})
        } else {
            res.send('Not Allowed')
        }

    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

function generateAccessToken(user) {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' })
}

async function getUserInfo(req, res, next) {
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
    app.use('/login', router);
}