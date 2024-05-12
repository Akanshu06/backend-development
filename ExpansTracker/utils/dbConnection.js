const sequelize = require('sequelize');

const createdSequelize = new sequelize('myfirstdatabase','root','mysql',{
    dialect:'mysql',
    host:'localhost'
})

module.exports= createdSequelize;