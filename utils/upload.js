const multer = require("multer");
let path = require("path")

var document = multer.diskStorage({
  destination: (req, file, cb) => { 
    cb(null,path.resolve()+"/ressources/uploads/documents");
  },
  filename: (req, file, cb) => {
    let d = new Date()
    console.log("upload", file);
    cb(null, `${d.getFullYear()}${d.getMonth()}${d.getDate()}${d.getHours() < 10 ? "0"+d.getHours() : d.getHours()}${d.getMinutes() < 10 ? '0'+d.getMinutes() : d.getMinutes()}-Document-de-${req.body.title.trim().replace(/ /g, "-")}.${file.originalname.split('.').pop()}`);
  },
});

var uploadDocument = multer({ storage: document});

module.exports = { uploadDocument }