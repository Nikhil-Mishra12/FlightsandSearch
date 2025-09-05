'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airplanes', [
    {
        modelNumber: 'boeing 777',
        capacity: 210,
        createdAt:new Date(),
        updatedAt:new Date()
      },

      {
        modelNumber: 'boeing 777',
        capacity: 400,
        createdAt:new Date(),
        updatedAt:new Date()
      },

      {
        modelNumber: 'Airbus A320',
        capacity: 215,
        createdAt:new Date(),
        updatedAt:new Date()
      },

      {
        modelNumber: 'boeing 747',
        capacity: 200,
        createdAt:new Date(),
        updatedAt:new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
