const User = require('../models/user.model')
const mongoose = require('mongoose').Schema
module.exports.authenticate = (id, name, url)=>{
    return User.findOne({fbId: id}).exec().then(async (user) =>{
        if(!user){
            const newUser = new User({ 
                fbId: id,
                displayName: name,
                photoUrl: url})
            await newUser.save()
            return User.findOne({ fbId:id})
        }
        return user
    })
}