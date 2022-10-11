const Todo = require('../models/todoModel')


// create a new todo
const createTodo = async (req, res) => {
    try {
        const todo = new Todo(req.body)
        await todo.save()
        res.status(201).json({ success: true, data: todo })
    } catch (e) {
        res.status(500).json({ success: false, message: 'Failed to create the todo!' })
    }
}

// get a todo by id
const getTodoById = async (req, res) => {
    try {
        const todo = await Todo.findById(req.params.id)
        if (!todo) {
            return res.status(404).json({ success: false, message: 'Requested todo could not be found' })
        }
        res.status(200).json({ success: true, data: todo })

    } catch (e) {
        res.status(500).json({ success: false, message: 'Failed to fetch the todo!' })
    }
}

// get all todos
const getAllTodos = async (req, res) => {
    const { id } = req.params
    try {
        const todos = await Todo.find({ creator: id })
        res.status(200).json({ success: true, data: todos })

    } catch (e) {
        res.status(404).json({ success: false, message: 'Failed to fetch the todos!' })
    }
}

// update a tood by ID
const updateTodoById = async (req, res) => {
    const allowedUpdates = [text]
    const updates = Object.keys(req.body)
    const isAllowed = updates.every(update => allowedUpdates.includes(update))
    if (!isAllowed) {
        return res.status(500).json({ success: false, message: 'Bad Request!' })
    }
    const todo = await Todo.findById(req.params.id)
    if (!todo) {
        return res.status(400).json({ success: false, message: 'No Todos Found!' })
    }
    try {
        updates.forEach(update => todo[update] = req.body[update])
        await todo.save()
        res.status(201).json({ success: true, message: 'Todo successfully Updated!' })
    } catch (e) {
        res.status(500).json({ success: false, message: 'Bad Request!' })
    }
}


const deleteTodoById = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndDelete(req.params.id)
        res.status(201).json({ success: true, data: todo })
    } catch (e) {
        res.status(500).json({ success: false, message: 'failed to delete the todo!' })
    }
}

module.exports = {
    createTodo,
    getTodoById,
    getAllTodos,
    updateTodoById,
    deleteTodoById
}