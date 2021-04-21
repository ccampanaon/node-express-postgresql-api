const Sequelize = require('sequelize');

const sequelize = require ('../../config/connection');
const items = require ('./model')(sequelize, Sequelize);
