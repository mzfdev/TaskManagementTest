const { Router } = require('express');
const router = Router();
const { createUser } = require('../controllers/userController');

//create user route
router.post('/users', createUser)

module.exports = router