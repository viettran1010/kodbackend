const router = require('express').Router()
const {authMiddleware} = require('../middlewares/auth')
const {GetHightScore, SaveResult, GetHistory} = require('../services/game')



router.get('/hightScore/:playerId', authMiddleware(true), async (req, res) => {
    const result = await GetHightScore(req.params.playerId)
    return res.status(200).json({highScore: result.score})
})
router.post('/saveScore',authMiddleware(true) , async(req, res) => {
    const {playerId, score, date} = req.body
    await SaveResult(playerId, score, date)
    return res.status(200).json({message: 'Save successfully'})
})
router.get('/history/:playerId', async (req, res) => {
    const history = await GetHistory(req.params.playerId)
    return res.status(200).json({history: history})
})






module.exports = router