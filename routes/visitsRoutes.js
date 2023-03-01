const express = require('express')
const router = express.Router()

const VisitController = require('../controllers/VisitController')

router.get('/', VisitController.visit)
router.post('/add', VisitController.visitSave)
router.post('/remove', VisitController.visitRemove)
router.post('/updatestatus', VisitController.toggleVisitStatus)

module.exports = router