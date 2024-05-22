const express = require('express');
const mainCantroller = require('../controllers/mainControllers');
const router = express.Router();
const database=  require('../database/sequelize');



router.post('/post-data',mainCantroller.postInfo);
router.get('/get-data',mainCantroller.getInfo);
router.put('/update-data/:id',mainCantroller.updateInfo);
database.sync();
module.exports = router;