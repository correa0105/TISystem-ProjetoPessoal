const express = require('express')
const router = express.Router()

const StockController = require('../controllers/StockController')

router.get('/', StockController.stock)
router.post('/add', StockController.itemSave)
router.post('/remove', StockController.itemRemove)

module.exports = router