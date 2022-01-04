/*
UAS_Cafe (Makanan dan Minuma)
Kelompok:
Ade Indah Riznaya 194110039
Rika Sheva Aprilia 19411017
*/
const router = require('express').Router()
const userController = require('../Controller/user_controller')
router.post('/register', (req, res) => {
  userController.register(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.post('/login', (req, res) => {
  userController.login(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
module.exports = router