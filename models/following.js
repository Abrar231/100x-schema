'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Following extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Following.init({
    follower_id: DataTypes.BIGINT,
    followee_id: DataTypes.BIGINT,
    followed_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Following',
  });
  return Following;
};