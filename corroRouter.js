// Imports
var express      = require('express');
var corroCtrl    = require('./controllers/corroCtrl'); 

// Router
exports.router = (function() {
  
  var corroRouter = express.Router();

  corroRouter.route("/search").get(corroCtrl.search);

  return corroRouter;
})();