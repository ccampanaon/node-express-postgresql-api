const config = require('./config');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: config.dialect,
    operatorsAliases: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },   
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
  });

const db = {};
 
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.users = require('../apiServices/users/model')(sequelize, Sequelize);

module.exports = db;