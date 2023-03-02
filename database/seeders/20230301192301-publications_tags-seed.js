'use strict';

const models = require('../models')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
    
    const pub1 = await models.Publications.findOne({where: {tittle: 'Cold Play en Buenos Aires'}})
    const pub2 = await models.Publications.findOne({where: {tittle: '4x3 en walmart'}})
    const pub3 = await models.Publications.findOne({where: {tittle: 'fútbol 5'}})

    const publicationsTagsSeed = [
      {
        tag_id: 3,
        publication_id: pub1.id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        tag_id: 5,
        publication_id: pub2.id,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        tag_id: 1,
        publication_id: pub3.id,
        created_at: new Date(),
        updated_at: new Date()
      },
    ]

    try {
      await queryInterface.bulkInsert('Publications_tags', publicationsTagsSeed)
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      console.log(error);
      throw error
    }
  },

  async down (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
    const dataToDelete = [1,2,3]

    try {
      await queryInterface.bulkDelete('Publications_tags', { 
        tag_id: dataToDelete 
      }, { transaction});

      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      console.log(error);
      throw error
    }
  }
};