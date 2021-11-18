const mongoose = require('mongoose')

const room = new mongoose.Schema({
    adminID: {
        type: String,
        required: true
    },
    otherUserID: {
        type: String,
        required: true
    },
    otherUserAcceptance: {
        type: Boolean,
        required: true,
        default: false
    },
    delegatedTasks: {
        type: Array
    },
    creationDate: {
        type: Date,
        required: true,
        default: () => Date.now()
    }
})

module.exports = mongoose.model('room', room)