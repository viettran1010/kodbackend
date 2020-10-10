const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GameSchema = new Schema({
            playerId: {type: String, required: true},
            score: {type: Number, required: true}
})
const Game = mongoose.model('game', GameSchema)

module.exports ={Game}