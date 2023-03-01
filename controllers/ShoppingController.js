const Item = require('../models/Item')

module.exports = class ShoppingController {

    static async shopping(req, res) {
        
        const items = await Item.findAll({ raw: true })

        res.render('shopping', { items })

    }

    static async itemSave(req, res) {
        
        const item = {
            item: req.body.item,
            local: req.body.local,
            description: req.body.description,
            deliveryDate: req.body.deliveryDate,
            delivered: false
        }

        await Item.create(item)

        res.redirect('/shopping')
    }

    static async itemRemove(req, res) {

        const id = req.body.id

        await Item.destroy({ where: { id: id }})

        res.redirect('/shopping')
    }

    static async toggleItemStatus(req, res) {
        
        const id = req.body.id

        const item = {
            delivered: req.body.delivered === '0' ? true : false
        }

        await Item.update(item, { where: { id: id }})

        res.redirect('/shopping')
    }

}