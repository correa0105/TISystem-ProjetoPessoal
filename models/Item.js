const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Item = db.define('Item', {
    name: {
        type: DataTypes.STRING,
        required: true
    },
    local: {
        type: DataTypes.STRING,
        required: true
    },
    description: {
        type: DataTypes.STRING,
        required: true
    },
    price: {
        type: DataTypes.DOUBLE,
        required: true
    },
    deliveryDate: {
        type: DataTypes.DATE,
        required: true
    }
})

module.exports = Item