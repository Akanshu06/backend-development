const Sequelize = require("sequelize");

const sequelize = new Sequelize('new_schema','root','mysql',
    // process.env.DATABASE_NAME,
    // process.env.DATABASE_USERNAME,
    // process.env.DATABASE_PASSWORD,
    {
        dialect:'mysql',
        host: 'localhost',
        logging:false
    });

module.exports = sequelize;