const Sequelize = require('sequelize');
const sequelize = require("../database/sequelize");

const infoModel = sequelize.define('infoModel', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    dob: { type: Sequelize.DATEONLY},

    photoURL:{type:Sequelize.STRING},

    birthplace:{type: Sequelize.STRING},
    career:{type:Sequelize.STRING},
    matches:{type:Sequelize.INTEGER},
    score:{type:Sequelize.INTEGER},
    fifties:{type:Sequelize.INTEGER},
    average:{type:Sequelize.INTEGER}

});

module.exports = infoModel;