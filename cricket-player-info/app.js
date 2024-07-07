const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const mainRauter = require('./routes/mainRoutes')

const app = express();
// middleware
app.use(bodyParser.json({extende:false}));
app.use(express.static('public'));
app.use(cors());
app.use('/',mainRauter);

app.listen(2000);
