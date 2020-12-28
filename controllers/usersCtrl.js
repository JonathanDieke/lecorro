// Imports
var bcrypt    = require('bcrypt');
var jwtUtils  = require('../utils/jwt.utils');
var models    = require('../models');
var asyncLib  = require('async'); 

// Constants
const EMAIL_REGEX     = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX  = /^(?=.*\d).{4,8}$/;

// Routes
module.exports = {
  register: function(req, res) {
    // Params
    var {register ,email, name, lastname, pseudo, password, cpassword} = {...req.body.data};

    if (register == "" || email == "" || name == "" || lastname == "" || pseudo == "" || password == "" || cpassword == "") {
      return res.json({ 'error': "Veuillez remplir tous les champs !" });
    }
    
    if (pseudo.length >= 13 || pseudo.length <= 4) { 
      return res.json({ 'error': 'Mauvais pseudo (Longueur :  5 - 12)' });
    }
    
    if (!EMAIL_REGEX.test(email)) {
      return res.json({ 'error': "L'email n'est pas valide." });
    }
    
    if (!PASSWORD_REGEX.test(password)) { 
      return res.json({ 'error': 'Mot de passe invalide (Longueur : 4 - 8 et inclus 1 chiffre au moins.)'});
    }

    if(password != cpassword){
      return res.json({ 'error': 'Les mots de passe ne correspondent pas.' });
    }

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

  login: function(req, res) {
    console.log("login controller");
    // Params 
    var {email, password} = req.body.data;

    if (email == "" ||  password == "") {
      return res.json({ 'error': "Veuillez remplir tous les champs !" });
    }

    asyncLib.waterfall([
      function(done) {
        models.User.findOne({
          where: { email: email }
        })
        .then(function(userFound) {
          done(null, userFound);
        })
        .catch(function(err) {
          console.log("Erreur du serveur !");
          return res.json({ 'error': "Impossible de vous connecter, veuillez réessayer !" });
        });
      },
      function(userFound, done) {
        if (userFound) {
          bcrypt.compare(password, userFound.password, function(errBycrypt, resBycrypt) {
            done(null, userFound, resBycrypt);
          });
        } else {
          return res.json({ 'error': "Identifiants invalides, veuillez réessayer !" });
        }
      },
      function(userFound, resBycrypt, done) {
        if(resBycrypt) {
          done(userFound);
        } else {
          return res.json({ 'error': 'Mot de passe incorrect.' });
        }
      }
    ], 
    function(userFound) {
      if (userFound) {
        console.log(userFound);
        return res.status(201).json({
          'id': userFound.id,
          'token': jwtUtils.generateTokenForUser(userFound),
          'email': userFound.email,
          'name': userFound.name,
          'lastname': userFound.lastname,
          'pseudo': userFound.pseudo,
        });
      } else {
        return res.json({ 'error': 'Impossible de vous connecter, veuillez réessayer !' });
      }
    });
  },

  getUserProfile: function(req, res) {
    // Getting auth header
    var headerAuth  = "Bearer " + req.params.token;
    var userId      = jwtUtils.getUserId(headerAuth);

    if (userId < 0)
      return res.json({ 'error': 'Mauvais jeton de connexion.' });

    models.User.findOne({
      attributes: [ 'id', 'register', 'name', 'lastname', 'email', 'pseudo' ],
      where: { id: userId }
    }).then(function(user) {
      if (user) {
        res.json(user);
      } else {
        res.json({'error': 'Utilisateur inexistant.' });
      }
    }).catch(function(err) {
      console.log("Erreur du serveur.");
      res.json({ 'error': "Impossible de trouver l'utilisateur, veuillez réessayer !" });
    });
  },
  
  updateUserProfile: function(req, res) {
    // Getting auth header
    var headerAuth  = "Bearer " + req.params.token;
    var userId      = jwtUtils.getUserId(headerAuth);

    // Params 
    var {email, name, lastname, pseudo} = req.body;

    asyncLib.waterfall([
      function(done) {
        models.User.findOne({
          attributes: ['id', "email", 'name', "lastname", "pseudo"],
          where: { id: userId }
        }).then(function (userFound) {
          done(null, userFound);
        })
        .catch(function(err) {
          console.log("Status Code : 404");
          return res.json({ 'error': 'Utilisateur inexistant !' });
        });
      },
      function(userFound, done) {
        if(userFound) {
          userFound.update({
            email: (email ? email : userFound.email),
            name: (name ? name : userFound.name),
            lastname: (lastname ? lastname : userFound.lastname),
            pseudo: (pseudo ? pseudo : userFound.pseudo),
          }).then(function() {
            done(userFound);
          }).catch(function(err) {
            console.log("Status Code : 500");
            res.json({ 'error': 'Impossible de mettre à jour le profil, réessayer plutard !' });
          });
        } else {
          res.json({ 'error': 'Utilisateur inexistant !' });
        }
      },
    ], function(userFound) {
      if (userFound) {
        return res.json(userFound);
      } else {
        console.log("Status Code : 500");
        return res.json({ 'error': 'Impossible de mettre à jour le profil, réessayer plutard !' });
      }
    });
  }
}