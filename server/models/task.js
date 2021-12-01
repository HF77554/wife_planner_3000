const mongoose = require('mongoose')

const room = new mongoose.Schema({
    listLocation: {
        type: int,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    inProgress: {
        type: Boolean,
        required: true,
        default: false
    },
    Urgent: {
        type: Boolean,
        required: true,
        default: false
    },
    completionDate: {
        type: Date
    },
    creationDate: {
        type: Date,
        required: true,
        default: () => Date.now()
    }
})

module.exports = mongoose.model('task', task)