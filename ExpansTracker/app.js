const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const ExpanseRoutes = require('./raoutes/expansRouter')
const createdSequelize = require('./models/firstmodel');
createdSequelize.sync();
const app = express();
app.use(bodyParser.json({extended:false}))
app.use(cors());
app.use(express.static('public'))
app.use(ExpanseRoutes);

app.listen(4000);