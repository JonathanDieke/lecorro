'use strict';

module.exports = (sequelize, DataTypes) => {
  var Study_Subject = sequelize.define('Study_Subject', {
    id : DataTypes.INTEGER,
    study_id: DataTypes.INTEGER,
    subject_id: DataTypes.INTEGER, 
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here 
      }
    }
  });
  return Study_Subject;
};