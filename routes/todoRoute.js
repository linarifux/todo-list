const express = require('express')
const { getTodoById, getAllTodos, updateTodoById, createTodo } = require('../controllers/todoController')
const router = express.Router()


// create a new todo
router.post('/new', createTodo)

// get all todos
router.get('/:id/all', getAllTodos)

// get a todo by ID
router.get('/:id', getTodoById)

// update a todo by ID
router.put('/:id', updateTodoById)


module.exports = router