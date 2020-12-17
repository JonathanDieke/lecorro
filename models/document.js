'use strict';

module.exports = (sequelize, DataTypes) => {
  var Document = sequelize.define('Document', {
    id : {
      type : DataTypes.INTEGER, 
      primaryKey: true
    },
    subject_id: {
      type : DataTypes.INTEGER,
    },
    path: {
      type : DataTypes.STRING,
    },
    title: {
      type : DataTypes.STRING,
    },
    description:{
       type : DataTypes.STRING,
    },
    keywords:{
       type : DataTypes.STRING,
    },
  }, {
    classMethods: {
      associate: function(models) {
        models.Document.hasMany(models.Corro, {
          foreignKey: 'document_id',
        });
        models.Document.belongsTo(models.Subject);
      }
    }
  });
  return Document;
};