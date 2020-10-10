const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    displayName: {type: String, required: true},
    fbId: {type: String, required: true},
    photoUrl: {type: String, required: true},
})
const User = mongoose.model('users', UserSchema)

module.exports = User