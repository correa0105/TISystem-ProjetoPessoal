const express = require('express')
const router = express.Router()

const StockController = require('../controllers/StockController')

router.post('/add', StockController.itemSave)
router.post('/remove', StockController.itemRemove)
router.post('/alterQuantity', StockController.alterQuantity)
router.get('/', StockController.stock)

module.exports = router