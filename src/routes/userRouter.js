const { Router } = require('express');
const router = Router();
const { createUser } = require('../controllers/userController');
const { login } = require('../controllers/authController');

//create user route
router.post('/users', createUser)
router.post('/users/login', login)

module.exports = router