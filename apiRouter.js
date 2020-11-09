// Imports
var express      = require('express');
var usersCtrl    = require('./controllers/usersCtrl'); 

// Router
exports.router = (function() {
  var apiRouter = express.Router();

  // Routes Users
  apiRouter.route('/users/register').post(usersCtrl.register);
  apiRouter.route('/users/login').post(usersCtrl.login);
  apiRouter.route('/users/me/:token').get(usersCtrl.getUserProfile);
  apiRouter.route('/users/me/:token').patch(usersCtrl.updateUserProfile);

  return apiRouter;
})();