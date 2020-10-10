const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
const SECRET_KEY = "MY_SECRET_KEY@"
const generateToken = (displayName)=>{
    return jwt.sign({displayName: displayName}, SECRET_KEY, {
        expiresIn: 3600
    })
}
module.exports.authenticate = (req, res)=>{
    const token = generateToken(req.user.displayName)
    return res.status(200).json(token, req.user)
}