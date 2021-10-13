const mongoose = require('mongoose')

const husbandOfUserSchema = new mongoose.Schema({
    husbandName: {
        type: String,
        required: true
    },
    husbandTasks: {
        type: Object
    },
    creationDate: {
        type: Date,
        required: true,
        default: () => Date.now()
    }
})

module.exports = mongoose.model('husbandOfUser', husbandOfUserSchema)