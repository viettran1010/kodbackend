const Game = require('../models/game.model')

module.exports.SaveResult = async (playerId ,result) => {
    const gameResult = new Game({
        playerId: playerId,
        result: result
    })
    return await gameResult.save()
}