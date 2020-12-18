'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Level_Study', [{
      study_id : 1,
      level_id : 1 ,
    }, {
      study_id : 2,
      level_id : 1,
    }, {
      study_id : 3,
      level_id :1,
    }, {
      study_id : 4,
      level_id : 1,
    },   
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    return await queryInterface.bulkDelete('Level_Study', null, {});

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
