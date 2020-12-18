'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert('Study_Subject', [{
      study_id : 1,
      subject_id : 1 ,
    }, {
      study_id : 1,
      subject_id : 2,
    }, {
      study_id : 1,
      subject_id :3 ,
    }, {
      study_id : 1,
      subject_id : 5,
    },   
    ], {});

  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete('Study_Subject', null, {});
  }
};
