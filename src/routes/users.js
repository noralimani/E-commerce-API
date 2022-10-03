const express = require('express')
const router = express.Router()
const usersController = require('../controllers/UserController');

router.get('/users', usersController.index)

module.exports = router;