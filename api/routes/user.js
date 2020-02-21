const express = require("express");
const router = express.Router();

const checkAuth = require('../middleware/check-auth')

const UserController = require('../controllers/user')

router.post('/signup', UserController.user_signup)

router.post('/login', UserController.user_login)

router.delete('/:userId', UserController.user_delete)

router.get('/test', (req, res) =>{
    res.end("Test")
})

module.exports = router;