'use strict';

module.exports = (sequelize, DataTypes) => {
  var Subject = sequelize.define('Subject', {
    id : {
      type : DataTypes.INTEGER,
      primaryKey : true,
    },
    libel:{
       type : DataTypes.STRING,
    },
  }, {
    classMethods: {
      // associate: function(models) {
      //   models.Subject.belongsToMany  (models.Study);
      //   models.Subject.hasMany(models.Document);
      // }
    }
  });

  Subject.associate = (models) => {
    
    Subject.hasMany(models.Document, {
      sourceKey: 'id',
      foreignKey: 'subject_id',
    });

    Subject.belongsToMany(models.Study, {
      through : 'study_subject',
      foreignKey: 'subject_id',
      otherKey : "study_id"
    });

  }

  return Subject;
};