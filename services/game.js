const {Game} = require('../models/game.model')

module.exports.SaveResult = async (playerId ,result, timeSave) => {
    const gameResult = new Game({
        playerId: playerId,
        score: result,
        date: timeSave
    })
    return await gameResult.save()
}
module.exports.GetHightScore = async (playerId)=>{
    const result = await Game.findOne({playerId:playerId}).sort({'score': -1})
    return result
}
module.exports.GetHistory = async (playerId)=>{
    const result = await Game.find({playerId:playerId}).sort({'_id': -1})
    return result
}