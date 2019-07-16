const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
    res.header('Access-Control-Expose-Headers', 'curToken')
    try {
        const token = req.header('curToken') // get header
        console.log('auth token:', token) // header returns undefined
        const decoded = jwt.verify(token, 'thisismysecretcode')
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })
        
        if (!user) {
            throw new Error()
        }

        req.token = token
        req.user = user
        next()
    } catch(err) {
        res.status(401).send({error: 'Please authenticate.'})
    }
}

module.exports = auth
