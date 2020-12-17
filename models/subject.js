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
      associate: function(models) {
        models.Subject.belongsToMany  (models.Study);
        models.Subject.hasMany(models.Document);
      }
    }
  });
  return Subject;
};