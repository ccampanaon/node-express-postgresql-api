const usersController = require('./controller');

exports.usersRoutes = function(app) {
    app.post('/users', [usersController.insert]);
    app.get('/users', [usersController.findAllUsers]);
    app.get('/users/:id', [usersController.findUserById]);
};