'use strict';

module.exports = (sequelize, DataTypes) => {
  var Corro = sequelize.define('Corro', {
    id : {
      type : DataTypes.INTEGER,
      primaryKey:true
    },
    document_id: {
      type : DataTypes.INTEGER,
    },
    description: {
     type :  DataTypes.STRING
    },
  }, {
    classMethods: {
      associate: function(models) {
        models.Corro.belongsTo(models.Document);
      }
    }
  });
  return Corro;
};