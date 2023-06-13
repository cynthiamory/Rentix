const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Transportation extends Model { }

Transportation.init(
    {
        // define columns
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        transportation_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        transportation_desciption:
        {
            type: DataTypes.STRING,
            allowNull: false,
        },
        capacity:
        {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataTypes.INTEGER,
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
        modelName: 'transportation',
    }
);

//EXPORT
module.exports = Transportation;
