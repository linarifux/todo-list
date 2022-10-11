const User = require('../models/userModel')


// create new user
const createNewUser = async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        res.status(201).json({ success: true, data: user })
    } catch (e) {
        res.status(500).json({ success: false, message: 'Failed to create user!' })
    }
}


// get all the users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json({ success: true, data: users })
    } catch (e) {
        res.status(500).json({ success: false, message: 'Failed to fetch all the users!' })
    }
}

// get a user by ID
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) {
            return res.status(200).json({ success: false, message: 'Failed to fetch the user' })
        }
        res.status(200).json({ success: true, data: user })
    } catch (e) {
        res.status(500).json({ success: false, message: 'Failed to fetch all the user!' })
    }
}

// delete a user by ID
const deleteUserById = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        return res.status(200).json({ success: true, data: user })
    } catch (e) {
        res.status(500).json({ success: false, message: 'Failed to fetch all the user!' })
    }
}

// login user
const loginUser = async (req, res) => {
    const user = req.user
    res.status(200).send(user)
}


module.exports = {
    createNewUser,
    getAllUsers,
    getUserById,
    deleteUserById,
    loginUser
}