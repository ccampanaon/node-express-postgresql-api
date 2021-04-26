const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');
const users = require('./apiServices/users/routes');
require('dotenv').config();

const app = express();
const env = path.join(__dirname, '.env');
require('dotenv').config({path: path.join(__dirname, '.env')});
const port = process.env.port || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); 
const db = require('./config/connection');

const Users = db.users;
// force: true will drop the table if it already exists
db.sequelize.sync({force: false , alter : true}).then(() => {
    console.log('Drop and Resync with { force: true }');
  });
app.get('/', (req, res) => {
  res.send('Welcome to NODE JS AWS...')
});
users.usersRoutes(app);

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  });