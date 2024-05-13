const express = require('express');
const expanseController = require('../controller/expanseController');
const router = express.Router();

router.post('/postExpanse',expanseController.postExpanse);
router.get('/getExpanse',expanseController.getExpanse);

router.delete('/deleteExpanse/:id',expanseController.deleteExpanse);

router.put('/editExpanse/:id',expanseController.editEpanse);

module.exports = router;