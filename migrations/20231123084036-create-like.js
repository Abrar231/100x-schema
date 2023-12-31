'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Likes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      user_id: {
        type: Sequelize.BIGINT,
        references: {
          model: "Users",
          key: "id"
        }
      },
      post_id: {
        type: Sequelize.BIGINT,
        references: {
          model: "Posts",
          key: "id"
        }
      },
      liked_at: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });

    await queryInterface.addConstraint("Likes", {
      type: 'unique',
      fields: ['user_id', 'post_id'],
      name: 'unique_like'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Likes', 'unique_like');

    await queryInterface.dropTable('Likes');
  }
};