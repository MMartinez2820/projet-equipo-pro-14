'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Publications_tags', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tag_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        foreignKey: true,
        references: {
          model: 'tags',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      publication_id: {
        type: Sequelize.UUID,
        allowNull: false,
        primaryKey: true,
        foreignKey: true,
        references: {
          model: 'publications',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.dropTable('publications_tags', { transaction })
      await transaction.commit()
    } catch (error) {
      console.log(error);
      await transaction.rollback()
      throw error
    }
  }
};