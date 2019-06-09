const router = require('express').Router()
const { login, register } = require('../controllers/userController')

// Registration route
router.post('/register', register)

// Login route
router.post('/login', login)

module.exports = router