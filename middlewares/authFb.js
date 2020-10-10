const passport = require('passport')
const passportFb = require('passport-facebook-token')
const User = require('../models/user.model')

passport.use(new passportFb({
    clientID: '335890680813452',
    clientSecret: '8eefd0a2717a88ee0bb15464e65e9eb3',
    callbackURL: 'http://localhost:3000/auth/facebook',
},
    async (accessToken, refreshToken, profile, done) => {
        try {

            const user = await User.findOne({ fbId: profile.id})
            if (user) return done(null, user)
            const newUser = new User({
                fbId: profile.id,
                displayName: profile.displayName,
                photoUrl: profile.photos[0].value
            })
            await newUser.save()
            return done(null, newUser)
        } catch (error) {
            done(error, false)
        }
    }
))