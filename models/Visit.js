const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Visit = db.define('Visit', {
    local: {
        type: DataTypes.STRING,
        required: true
    },
    resume: {
        type: DataTypes.STRING,
        required: true
    },
    date: {
        type: DataTypes.STRING,
        required: true
    },
    done: {
        type: DataTypes.BOOLEAN,
        required: true
    }
})

module.exports = Visit