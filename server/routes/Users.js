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

router.post('/', async (req, res) =>{
    const user = new User({
        username: req.body.username,
        userpassword: await encryption(req.body.userpassword),
        husbandOfUserID: await encryption(req.body.husbandOfUserID)
    })
    try {
        const newUser = await user.save()
        res.status(201).json(newUser)
    } catch (err) {
        res.status(400).json({message: err.message})
    }
})

router.post('/login', getUser, async (req, res) => {
    console.log(req.params)
    try {
        if( bcrypt.compare(req.body.userpassword, user.userpassword)){
            res.send('Success')
        } else {
            res.send('Not Allowed')
        }

    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

router.delete('/:id', async (req, res) =>{
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
        let users = await User.find()
        user = users.find(u => console.log(u.username))
        console.log(req.params)

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