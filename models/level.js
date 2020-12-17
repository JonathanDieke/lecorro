'use strict';

module.exports = (sequelize, DataTypes) => {
  var Level = sequelize.define('Level', {
    id : {
      type : DataTypes.INTEGER,
      primaryKey : true
    },
    libel: {
      type : DataTypes.STRING,
    },
  }, {
    classMethods: {
      associate: function(models) {
        models.Level.belongsToMany(models.Study, {
          through: models.Level_Study,
          foreignKey: 'level_id',
          otherKey: 'study_id',
        });
      }
    }
  });
  return Level;
};