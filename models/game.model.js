const mongoose = require('mongoose')
const Schema = mongoose.Schema

const GameSchema = new Schema({
            playerId: {type: String, required: true, ref:"user"},
            score: {type: Number, required: true},
            date: Date.now(),
})
const Game = mongoose.model('game', GameSchema)

module.exports ={Game}