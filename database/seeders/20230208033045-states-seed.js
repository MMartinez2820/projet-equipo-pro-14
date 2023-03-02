'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
      
    const statesSeeds = [
      {
        name: 'Buenos Aires',
        country_id: '1',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Cordoba',
        country_id: '1',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: 'Santa Fe',
        country_id: '1',
        created_at: new Date(),
        updated_at: new Date()
      }
    ]
    try {
      await queryInterface.bulkInsert('states', statesSeeds, { transaction })

      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },

  async down (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
    const dataToDelete = [1,2,3,4,5]
    try {
      await queryInterface.bulkDelete('states', { 
        id: dataToDelete 
      }, { transaction});

      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  }
};
