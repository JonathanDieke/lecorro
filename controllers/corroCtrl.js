// Imports
var models    = require('../models');
var sequelize = require('sequelize')
const operator = sequelize.Op

module.exports = {

  addDocument: async function(req, res) { 

    if (req.file == undefined) {
      return res.json({"error" : `Vous devez selectionner un fichier.`});
    }

    var {subject_id, title, description, keywords} = {...req.body}; 

    let newDocument = await models.Document.create({
      subject_id,
      path : req.file.filename , 
      title, 
      description, 
      keywords,
     originalName : req.file.originalname
    })
    
    return res.json({
       data : newDocument,
    })

  },

  search : (req, res) => {
    let q = req.query.q;

    models.Document.findAll({
      where : {
        title : {[operator.like] : `%${q}%`}, 
        description : {[operator.like] : `%${q}%`}, 
        keywords : {[operator.like] : `%${q}%`}, 
      }
    })
    .then( data => {
      console.log(data);
      res.json({data})
    })
    
  },

  getSubjects : (req, res) => {
     models.Subject.findAll()
     .then( data => {
       res.send({
         data 
       })
     })
  }

}