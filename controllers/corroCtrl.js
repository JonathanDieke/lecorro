// Imports
var bcrypt    = require('bcrypt');
var jwtUtils  = require('../utils/jwt.utils');
var models    = require('../models');
var asyncLib  = require('async'); 

// Constants

// Routes
module.exports = {
  search: function(req, res) {
    // Params
    // var {register ,email, name, lastname, pseudo, password, cpassword} = {...req.body.data};
    
    return res.json({
        success:'code 200'
    })

    asyncLib.waterfall(
      [
        function (done) {
          // Verifier le matricule de l'utilisateur grâce à l'api des etudiants de l'esatic 
          // api qui sera pour l'instant simuler 
         done(null); 
        },
        function(done) {
          models.User.findOne({
            attributes: ['email'],
            where: { email: email }
          })
          .then(function(userFound) {
            done(null, userFound);
          })
          .catch(function(err) {
            console.log("Erreur du serveur !");
            return res.json({ 'error': "Impossible de vous enregistrer, veuillez réessayer plutard !" });
          });
        },
        function(userFound, done) {
          if (!userFound) {
            bcrypt.hash(password, 5, function( err, bcryptedPassword ) {
              done(null, bcryptedPassword);
            });
          } else {
            return res.json({ 'error': "L'utilisateur existe déjà !" });
          }
        },
        function(bcryptedPassword, done) {
          models.User.create({
            register: register,
            email: email,
            name: name,
            lastname: lastname,
            pseudo: pseudo,
            password: bcryptedPassword,
            // bio: bio,
            isAdmin: 0
          })
          .then(function(newUser) {
            done(newUser);
          })
          .catch(function(err) {
            console.log("Erreur du serveur !");
            return res.json({ 'error': "Une erreur s'est produite lors de l'enregistrement de l'utilisateur."});
          });
        }
      ], 
      function(newUser) {
        if (newUser) {
          return res.json({
            'userId': newUser.id
          });
        } else {
          console.log("Impossible de récupérer l'utilisateur enregistré.");
          return res.json({ 'error': "Une erreur s'est produite lors de l'enregistrement de l'utilisateur." });
        }
      });
  },

}