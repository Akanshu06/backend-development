const sequelize = require('sequelize');
const createdSequelize = require('../utils/dbConnection');

const ExpanseTable =createdSequelize.define('Expanses',{
    id:{
        type:sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    amount:{
        type:sequelize.INTEGER,
        allowNull:false
    },
    description:{
        type:sequelize.STRING,
        allowNull:false
    },
    item:{
        type:sequelize.STRING
    }
});
module.exports=ExpanseTable;