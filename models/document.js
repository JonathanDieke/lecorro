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
    originalName:{
       type : DataTypes.STRING,
    },
    
  }, {
    classMethods: {
      // associate: function(models) {
      //   models.Document.hasMany(models.Corro, {
      //     foreignKey: 'document_id',
      //   });
      //   models.Document.belongsTo(models.Subject);
      // }
    }
  });

  Document.associate = (models) => {
    Document.hasMany(models.Corro, {
      sourceKey: 'id',
      foreignKey: 'document_id',
    });

    Document.belongsTo(models.Subject, {
      targetKey : 'id', 
      foreignKey: "subject_id"
    });
  }
  return Document;
};