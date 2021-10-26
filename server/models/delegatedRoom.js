const mongoose = require('mongoose')

const delegatedRoom = new mongoose.Schema({
    adminID: {
        type: String,
        required: true
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

module.exports = mongoose.model('delegatedRoom', delegatedRoom)