'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

var pg = require('pg');
pg.defaults.ssl = true;


if (process.env.NODE_ENV == "production") {
  // var sequelize = new Sequelize(process.env[config.use_env_variable], config);
  // var sequelize = new Sequelize(config.production, config.production);
  var sequelize = new Sequelize("postgres://twvkxmjpmfovez:3297c7cbd631fade88ec85d2a34faa3190af19268f615c992991d06fbc3316ce@ec2-54-211-99-192.compute-1.amazonaws.com:5432/daenm3na0gr4r0");
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
