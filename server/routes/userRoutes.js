const express = require("express");
const router = express.Router();
const { loginUserController, signUpUserController } = require('../controller/userController');
router.post('/login', loginUserController);
router.post('/signUp', signUpUserController);
module.exports = router;