const router = require('express').Router()
const passport = require('passport')
const AuthService = require('../services/auth')
const auth = require('../middlewares/authFb')

router.route('/facebook')
    .post(passport.authenticate('facebook-token', {session: false}), AuthService.authenticate)

module.exports = router