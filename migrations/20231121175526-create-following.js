'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Followings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT
      },
      follower_id: {
        type: Sequelize.BIGINT,
        references:{
          model: "Users",
          key: "id"
        }
      },
      followee_id: {
        type: Sequelize.BIGINT,
        references:{
          model: "Users",
          key: "id"
        }
      },
      followed_at: {
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

    await queryInterface.addConstraint('Followings', {
      type: 'unique',
      fields: ['follower_id','followee_id'],
      name: 'unique_follower_followee_constraint',
    });

    await queryInterface.addConstraint("Followings", {
      type: 'check',
      fields: ['follower_id', 'followee_id'],
      name: "no_self_following",
      where: {
        follower_id: {
              [Sequelize.Op.ne]: Sequelize.col("followee_id")
          }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Followings', 'unique_follower_followee_constraint');
    
    await queryInterface.removeConstraint('Followings', 'no_self_following');

    await queryInterface.dropTable('Followings');
  }
};