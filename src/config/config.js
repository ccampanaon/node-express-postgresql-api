const path = require('path');
//const env = path.join(__dirname, '.env');
require('dotenv').config();
const env = process.env;

const config = {
  database: env.DB_NAME,
  username: env.DB_USER,
  password: env.DB_PASSWORD,
  host: env.DB_HOST,
  port: 5432,
  dialect: env.DB_DIALECT,
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};
 
module.exports = config;