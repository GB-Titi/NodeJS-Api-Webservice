const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.get('/login', (req, res) => {

});

router.post('/signup', (req, res) => {
    bcrypt.hash(req.body.password, rounds, (error, hash) =>{
        if(error) res.status(500).json(error)
        else{
            const newUser = User({
                email: req.body.email,
                password: hash
            })
            newUser.save()
                .then(user => {
                    res.status(200).json(user);
                })
                .catch(error => {
                    res.status(500).json(error);
                })
        }
    })
});

module.exports = router