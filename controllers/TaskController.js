const Task = require('../models/Task')

module.exports = class TaskController {

    static async createTaskSave(req, res) {
        
        const task = {
            title: req.body.title,
            description: req.body.description,
            priority: req.body.priority,
            done: false
        }

        await Task.create(task)

        res.redirect('/tasks')
    }

    static async showTasks(req, res) {
        
        const tasks = await Task.findAll({ raw: true, where: { done: false }})

        const taskHight = await Task.count({ where: { priority: 'hight',  done: false }})
        const taskMedium = await Task.count({ where: { priority: 'medium',  done: false }})
        const taskLow = await Task.count({ where: { priority: 'low',  done: false }})

        res.render('tasks', { tasks, taskHight, taskMedium, taskLow })
    }

    static async showTasksSolved(req, res) {
        
        const tasks = await Task.findAll({ raw: true, where: { done: true }})

        res.render('tasksSolved', { tasks: tasks })
    }

    static async removeTask(req, res) {
        
        const id = req.body.id

        await Task.destroy({ where: { id: id }})

        res.redirect('/tasks')
    }

    static async removeTaskSolved(req, res) {
        
        const id = req.body.id

        await Task.destroy({ where: { id: id }})

        res.redirect('/tasks/solvedtasks')
    }

    static async updateTask(req, res) {
        
        const id = req.params.id

        const task = await Task.findOne({ where: { id: id }})
        const tasks = await Task.findAll({ raw: true, order: ['done'] })

        const taskHight = await Task.count({ where: { priority: 'hight',  done: false }})
        const taskMedium = await Task.count({ where: { priority: 'medium',  done: false }})
        const taskLow = await Task.count({ where: { priority: 'low',  done: false }})

        res.render('taskEdit', { task, tasks, taskHight, taskMedium, taskLow })
    }

    static async updateTaskSave(req, res) {
        
        const id = req.body.id

        const task = {
            title: req.body.title,
            description: req.body.description,
            priority: req.body.priority
        }

        await Task.update(task, { where: { id: id }})

        res.redirect('/tasks')
    }

    static async toggleTaskStatus(req, res) {
        
        const id = req.body.id

        const task = {
            done: req.body.done === '0' ? true : false
        }

        await Task.update(task, { where: { id: id }})

        res.redirect('/tasks')
    }

}