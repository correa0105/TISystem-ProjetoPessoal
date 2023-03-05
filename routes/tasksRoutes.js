const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/TaskController')

router.post('/add', TaskController.createTaskSave)
router.post('/removesolved', TaskController.removeTaskSolved)
router.post('/remove', TaskController.removeTask)
router.get('/edit/:id', TaskController.updateTask)
router.post('/edit', TaskController.updateTaskSave)
router.post('/updatestatus', TaskController.toggleTaskStatus)
router.get('/solvedtasks', TaskController.showTasksSolved)
router.get('/', TaskController.showTasks)

module.exports = router