const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    userpassword: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    delegatedRoomID: {
        type: Array,
        required: false
    },
    subscribeDate: {
        type: Date,
        required: true,
        default: () => Date.now()
    }
})

module.exports = mongoose.model('user', userSchema)