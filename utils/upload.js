const multer = require("multer");


var doc = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, __basedir + "/ressources/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}- Document de -${file.originalname}`);
  },
});

var sjt = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, __basedir + "/ressources/uploads/");
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}- Sujet de -${file.originalname}`);
    },
  });

  var corr = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, __basedir + "/ressources/uploads/");
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}- Correction de -${file.originalname}`);
    },
  });


var uploadDoc = multer({ storage: doc});
var uploadSjt = multer({ storage: sjt});
var uploadCorr = multer({ storage: corr});

module.exports = { uploadDoc, uploadCorr, uploadSjt }