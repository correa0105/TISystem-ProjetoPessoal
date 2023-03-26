const Visit = require('../models/Visit')

module.exports = class VisitController {

    static async visit(req, res) {
        const visits = await Visit.findAll({ raw: true })
        res.render('visits', { visits })
    }

    static async visitSave(req, res) {
        const visit = {
            local: req.body.local,
            date: req.body.date,
            resume: req.body.resume,
            done: false
        }

        await Visit.create(visit)

        res.redirect('/visits')
    }

    static async visitRemove(req, res) {
        const id = req.body.id

        await Visit.destroy({ where: { id: id }})

        res.redirect('/visits')
    }

    static async updateVisit(req, res) {
        const id = req.params.id

        const visit = await Visit.findOne({ where: { id: id }})
        const visits = await Visit.findAll({ raw: true })

        res.render('visitEdit', { visit, visits })
    }

    static async updateVisitSave(req, res) {
        const id = req.body.id

        const visit = {
            local: req.body.local,
            date: req.body.date,
            resume: req.body.resume,
        }

        await Visit.update(visit, { where: { id: id }})

        res.redirect('/visits')
    }

    static async toggleVisitStatus(req, res) {
        const id = req.body.id

        const visit = {
            done: req.body.done === '0' ? true : false
        }

        await Visit.update(visit, { where: { id: id }})

        res.redirect('/visits')
    }

}