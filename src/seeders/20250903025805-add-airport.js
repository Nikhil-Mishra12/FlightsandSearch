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
   await queryInterface.bulkInsert('Airports',[
    {
    name:'kampegowda international airport',
    cityId:4,
    createdAt:new Date(),
    updatedat:new Date()
    },
    {
    name:'Indiragandhi international airport',
    cityId:3,
    createdAt:new Date(),
    updatedat:new Date()
    },
    {
    name:'Myusur Airport',
    cityId:4,
    createdAt:new Date(),
    updatedat:new Date()
    },
    {
    name:'Mengalru international airport',
    cityId:4,
    createdAt:new Date(),
    updatedat:new Date()
    }
   ],{})
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
