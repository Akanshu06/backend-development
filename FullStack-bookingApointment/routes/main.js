const express = require('express');
const router = express.Router();
const mainController = require('../controller/main');
router.get('/sign-up', mainController.getSignUp);
router.get('/login', mainController.getLogin);
router.get('/',mainController.main)

module.exports= router;