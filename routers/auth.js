const router = require('express').Router()
const {authenticate} = require('../services/auth')

router.route('/facebook').post(async(req, res) =>{
    const {name, picture, id} = req.body
    authenticate(id ,name, picture.data['url']).then((user) =>{
        res.status(200).json(user)
    }).catch((err) =>{
        res.status(401).json(err.message)
    })
})

module.exports = router