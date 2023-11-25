'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Replies', {
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
      content: {
        type: Sequelize.TEXT,
        // allowNull: false,
      },
      replied_at: {
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

    await queryInterface.addConstraint('Replies',{
      type: 'check',
      fields: ['content'],
      name: 'content_not_empty',
      where: {
        [Sequelize.Op.and]: [
          { content: { [Sequelize.Op.ne]: '' } },
          Sequelize.literal("TRIM(content) <> ''"),
          { content: { [Sequelize.Op.not]: null } }
        ]
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Replies', 'content_not_empty');

    await queryInterface.dropTable('Replies');
  }
};