'use strict';

module.exports = (sequelize, DataTypes) => {
  var Study = sequelize.define('Study', {
    id : {
      type : DataTypes.INTEGER,
      primaryKey : true,
    },
    libel:{
      type :  DataTypes.STRING, 
    },
  }, {
    classMethods: {
      // associate: function(models) {
      //   models.Study.belongsToMany(models.Subject, {
      //     through: models.Study_Subject,
      //     foreignKey: 'subject_id',
      //     otherKey: 'study_id',
      //   }); 
      //   models.Study.belongsToMany(models.Level, {
      //     through: models.Level_Study,
      //     foreignKey: 'level_id',
      //     otherKey: 'study_id',
      //   }); 
      // }
    }
  });

  Study.associate = (models) => {

    Study.belongsToMany(models.Subject, {
      through : 'study_subject',
      foreignKey: 'study_id',
      otherKey : 'subject_id'
    });

    Study.belongsToMany(models.Level, {
      through : 'level_study',
      foreignKey: 'study_id',
      otherKey : 'level_id'
    });

  }

  return Study;
};