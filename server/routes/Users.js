const express = require('express')
const router = express.Router()
const User = require('../models/user')
const encryption = require('../encryption')
const bcrypt = require('bcrypt')


router.get('/', async (req, res) =>{
    try{
        const users = await User.find()
        res.json(users)
    } catch (err) {
        res.status(500).json({message:err.message})
    }
})

router.post('/create', async (req, res) =>{
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

router.delete('/:id', getUser, async (req, res) =>{
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