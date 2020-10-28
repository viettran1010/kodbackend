const router = require('express').Router()

const authRouter = require('./auth')
const gameRouter = require('./game')
router.use('/auth' , authRouter)
router.use('/game' , gameRouter)

module.exports = router