'use strict';

module.exports = (sequelize, DataTypes) => {
  var Document = sequelize.define('Document', {
    id : DataTypes.INTEGER,
    subject_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    keywords: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here 
      }
    }
  });
  return Document;
};