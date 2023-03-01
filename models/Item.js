const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Item = db.define('Item', {
    item: {
        type: DataTypes.STRING,
        required: true
    },
    shop: {
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
    deliveryDate: {
        type: DataTypes.STRING,
        required: true
    },
    delivered: {
        type: DataTypes.BOOLEAN,
        required: true
    }
})

module.exports = Item