'use strict';

module.exports = (sequelize, DataTypes) => {
  var Subject = sequelize.define('Subject', {
    id : DataTypes.INTEGER,
    libel: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here 
      }
    }
  });
  return Subject;
};