// Imports
var express      = require('express');
var corroCtrl    = require('./controllers/corroCtrl'); 
var {uploadDocument} = require("./utils/upload") 

// Router
exports.router = (function() {
  
  var corroRouter = express.Router();

  corroRouter.route("/add_document").post(uploadDocument.single('document'), corroCtrl.addDocument);
  corroRouter.route("/search").get(corroCtrl.search); 
  corroRouter.route("/get_subjects").get(corroCtrl.getSubjects);

  return corroRouter;
})();