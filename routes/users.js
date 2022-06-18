const express = require('express')
const router = express.Router()
const { addNewUser } = require('../controllers/users')

router.post('/', addNewUser)

module.exports = router
