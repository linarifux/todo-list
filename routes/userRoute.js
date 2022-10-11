const express = require('express')
const auth = require('../auth/auth')

const { createNewUser, getAllUsers, getUserById, deleteUserById, loginUser } = require('../controllers/userController')
const router = express.Router()


// create a new user
router.post('/new', createNewUser)

// get all users
router.get('/all', getAllUsers)

// get a user by id
router.get('/:id', getUserById)

// delete a user by id
router.delete('/:id', deleteUserById)

// login user
router.post('/login', auth, loginUser)


module.exports = router