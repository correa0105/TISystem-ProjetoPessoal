const Stock = require('../models/Stock')
const { Op } = require('sequelize')

module.exports = class StockController {

    static async stock(req, res) {
        let search = '';

        if(req.query.search) {
            search = req.query.search
        }

        const itemsData = await Stock.findAll({ 
            where: { item: { [Op.like]: `%${search}%` } },
        })

        const stock = itemsData.map(result => result.get({ plain: true }))

        res.render('stock', { stock })
    }

    static async itemSave(req, res) {
        const item = {
            item: req.body.item,
            mark: req.body.mark,
            spec: req.body.spec,
            price: req.body.price,
            quantity: req.body.quantity
        }

        await Stock.create(item)

        res.redirect('/stock')
    }

    static async itemRemove(req, res) {
        const id = req.body.id

        await Stock.destroy({ where: { id: id }})

        res.redirect('/stock')
    }

    static async alterQuantity(req, res) {
        const id = req.body.id
        
        const quantityCurrent = await Stock.findOne({ where: { id: id }})

        const newQuantity = (Number(quantityCurrent.quantity) + Number(req.body.addQuantity)) - Number(req.body.removeQuantity)

        const stock = {
            quantity: newQuantity,
        }

        await Stock.update(stock, { where: { id: id }})

        res.redirect('/stock')
    }

}