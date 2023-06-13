const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Accomodation extends Model {}

Accomodation.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
      accomodation_place: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    accomodation_description:
    {
         type: DataTypes.STRING,
         allowNull: false,
     }, 
     accomodation_location:
    {
         type: DataTypes.STRING,
         allowNull: false,
     }, 
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    }
    },
  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'accomodation',
  }
);

//EXPORT
module.exports = Accomodation;
