const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class catering extends Model {}

catering.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
      catering_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    catering_desciption:
    {
         type: DataTypes.STRING,
         allowNull: false,
     }, 
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    },
    menu: {
        type: DataTypes.STRING,
        allowNull: false,
        
    }
    },
  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'catering',
  }
);

//EXPORT
module.exports = catering;
