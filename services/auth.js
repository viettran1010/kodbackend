const jwt = require('jsonwebtoken');
const {User} = require('../models/user.model')
const SECRET_KEY = "MY_SECRET_KEY@"
const generateToken = (username)=>{
    return jwt.sign({username: username}, SECRET_KEY, {
        expiresIn: 3600
    })
}
module.exports.verifyToken = (token)=>{
    return jwt.verify(token, SECRET_KEY)
}
module.exports.register = (username, password) =>{
    const user = new User({
        username: username,
    })
    user.generatePassword(password)
    return user.save()
}
module.exports.login =  (username, password)=>{
   return User.findOne({username: username}).exec().then((user) => 
        {
            if(!user.verifyPassword(password)){
                throw new Error("Wrong password")
            }
            return {user: user, token: generateToken(username)}
        })
}
module.exports.UpdateMe = (user ,payLoad) => {
    return User.updateOne({_id: user._id}, { ...user, ...payLoad})
    .exec()
    .then(() =>User.findById(user._id).exec())
    .then((user) => user._doc)
}