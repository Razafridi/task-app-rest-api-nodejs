const mongoose = require('mongoose')

const taskSchema = mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        require: true,
    },
    isDone:{
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now(),
    },
})

const taskModel = mongoose.model('task', taskSchema)

module.exports = taskModel