// Imports
var models    = require('../models');

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
    console.log(req.fields);

    res.json({
      req : req.fields
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