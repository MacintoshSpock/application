const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router()

// signup
router.post('/signup', async (req, res) => {
    res.header('Access-Control-Expose-Headers', 'curToken')
    const user = new User(req.body)
    
    try {   
        await user.save()
        const token = await user.generateAuthToken()
        res.set('curToken', token) // set header

        console.log('registered')
        res.send({ user, token })
    } catch(err) {
        res.status(400).send(err)
    }

})

// test if token header is accesible
router.get('', auth, async (req, res) => {
    try {
        // const users = await User.find({})
        res.send("logged in.")
    } catch(err) {
        res.send(err)
    }
})


module.exports = router