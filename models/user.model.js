const mongoose = require('mongoose')
const crypto = require('crypto')
const Schema = mongoose.Schema

const UserSchema = new Schema({
     username: {type: String, required: true, unique: true},
     hash: {type: String, require: true},
     salt: {type: String, require: true}
})
UserSchema.methods.generatePassword = function (password){
    this.salt =  crypto.randomBytes(128).toString('base64')
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex')
}
UserSchema.methods.verifyPassword = function(password){
    console.log(password)
    const hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex')
    return hash ===  this.hash
}
const User = mongoose.model('users', UserSchema)

module.exports = {User}