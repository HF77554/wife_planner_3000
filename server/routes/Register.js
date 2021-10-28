const express = require('express')
const router = express.Router()
const User = require('../models/user')
const encryption = require('../encryption')

router.post('/register', async (req, res) =>{
    const user = new User({
        username: req.body.username,
        userpassword: await encryption(req.body.userpassword)
    })
    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

module.exports = (app) => {
    app.use('/', router);
}