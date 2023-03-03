const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Stock = db.define('Stock', {
    item: {
        type: DataTypes.STRING,
        required: true
    },
    mark: {
        type: DataTypes.STRING,
        required: true
    },
    spec: {
        type: DataTypes.STRING,
        required: true
    },
    price: {
        type: DataTypes.STRING,
        required: true
    },
    quantity: {
        type: DataTypes.STRING,
        required: true
    }
})

module.exports = Stock