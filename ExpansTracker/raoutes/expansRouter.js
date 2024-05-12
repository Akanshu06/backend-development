const express = require('express');
const expanseController = require('../controller/expanseController');
const router = express.Router();

router.post('/postExpanse',expanseController.postExpanse);
router.get('/getExpanse',expanseController.getExpanse);

router.delete('/deleteRouter',expanseController.deleteExpanse);

router.put('/editRouter',expanseController.editEpanse);

module.exports = router;