const mongoose = require('mongoose')

const room = new mongoose.Schema({
    roomName: {
        type: String,
        required: true
    },
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
        type: Object
    },
    creationDate: {
        type: Date,
        required: true,
        default: () => Date.now()
    }
})

module.exports = mongoose.model('room', room)