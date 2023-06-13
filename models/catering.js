const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Catering extends Model { }
Catering.init(
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

        },
        user_id: {
            references: {
                model: 'accomadation',
                key: 'id',
            },
        },
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
module.exports = Catering;
