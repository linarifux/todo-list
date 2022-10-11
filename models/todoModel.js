const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    title: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    creator: {
        type: String,
        ref: 'users'
    }
}, { timestamps: true })


const Todo = new mongoose.model('todos', todoSchema)

module.exports = Todo