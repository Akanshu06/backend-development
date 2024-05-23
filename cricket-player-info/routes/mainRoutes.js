const express = require('express');
const mainCantroller = require('../controllers/mainControllers');
const router = express.Router();
const database=  require('../database/sequelize');



router.post('/post-data',mainCantroller.postInfo);
router.get('/get-data/:name',mainCantroller.getInfo);
router.post('/delete-data/:name',mainCantroller.deleteInfo)
database.sync();
module.exports = router;