'use strict';

module.exports = (sequelize, DataTypes) => {
  var Study_Subject = sequelize.define('Study_Subject', {
    id : {
      type : DataTypes.INTEGER,
      primaryKey : true,
    },
    study_id: {
      type : DataTypes.INTEGER,
    },
    subject_id: {
      type : DataTypes.INTEGER, 
    },
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here 
      }
    }
  });
  return Study_Subject;
};