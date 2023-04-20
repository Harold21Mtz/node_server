const UserController = require('../controllers/userControllers');

module.exports = (app) => {
    app.get('/api/users/getAll', UserController.getAll);
};

module.exports = (app) => {
    app.get('/api/users/create', UserController.register);
};