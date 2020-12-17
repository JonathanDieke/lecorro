'use strict';

module.exports = (sequelize, DataTypes) => {
  var Study = sequelize.define('Study', {
    id : {
      type : DataTypes.INTEGER,
      primaryKey : true,
    },
    level_id: {
      type : DataTypes.INTEGER,
    },
    name:{
      type :  DataTypes.STRING, 
    },
  }, {
    classMethods: {
      associate: function(models) {
        models.Study.belongsToMany(models.Subject, {
          through: models.Study_Subject,
          foreignKey: 'subject_id',
          otherKey: 'study_id',
        }); 
        models.Study.belongsToMany(models.Level, {
          through: models.Level_Study,
          foreignKey: 'level_id',
          otherKey: 'study_id',
        }); 
      }
    }
  });
  return Study;
};