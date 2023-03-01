const express = require('express')
const path = require('path')
const ejs = require('ejs')

const conn = require('./db/conn')
const Task = require('./models/Task')
const Visit = require('./models/Visit')

const tasksRoutes = require('./routes/tasksRoutes')
const visitsRoutes = require('./routes/visitsRoutes')
const shoppingsRoutes = require('./routes/shoppingRoutes')

const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static('public'));

app.use('/tasks', tasksRoutes)
app.use('/visits', visitsRoutes)
app.use('/shopping', shoppingsRoutes)

conn.sync()
    .then(() => app.listen(3000))
    .catch(err => {console.log(err)})