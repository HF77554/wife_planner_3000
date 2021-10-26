const express = require('express')
const router = express.Router()
const delegatedRoom = require('../models/delegatedRoom')

router.get('/:id', (req, res) =>{
    console.log(req.params.id)
    res.send("Working")
})

module.exports = (app) => {
    app.use('/room', router);
}