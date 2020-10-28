const router = require('express').Router()
const {register, login, verifyToken, UpdateMe} = require('../services/auth')
const {authMiddleware} = require('../middlewares/auth')

router.post('/register', (req, res) => {
    register(req.body.username, req.body.password).then((createUser) => {
        res.status(200).json(createUser)
    }).catch((error) =>{
        res.status(400).json({message: "Username already exist"})
    })
    
})
router.post('/login',  (req, res) => {
    const {username, password} = req.body
    login(username, password).then((user)=> res.status(200).json(user)).catch((err) => {
        res.status(400).json(err.message)})
})
router.get('/me',authMiddleware(true) ,(req, res) => {
    res.status(200).json(req.user)
})
module.exports = router

