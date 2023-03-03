const Stock = require('../models/Stock')

module.exports = class StockController {

    static async stock(req, res) {
        
        res.render('stock')

    }

    static async itemSave(req, res) {

    }

    static async itemRemove(req, res) {

    }

}