const express = require('express')
const router = express.Router()

const ShoppingController = require('../controllers/ShoppingController')

router.get('/', ShoppingController.shopping)
router.post('/add', ShoppingController.itemSave)
router.post('/remove', ShoppingController.itemRemove)
router.post('/updatestatus', ShoppingController.toggleItemStatus)

module.exports = router