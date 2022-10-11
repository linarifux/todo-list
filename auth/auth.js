const User = require("../models/userModel")

const auth = async (req, res, next) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        if (!user) {
            throw new Error()
        }
        if (user.password !== password) {
            throw new Error()
        }
        req.user = user
        next()
    } catch (e) {
        res.status(401).send('Please, Authenticate!')
    }
}


module.exports = auth