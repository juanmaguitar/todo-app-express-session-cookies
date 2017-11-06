const express = require('express')

const router = express.Router()

const showPendingTasks = require('./handlers/showPendingTasks')
const showCompletedTasks = require('./handlers/showCompletedTasks')
const addTask = require('./handlers/addTask')
const showLogin = require('./handlers/showLogin')
const removeTask = require('./handlers/removeTask')
const editTask = require('./handlers/editTask')
const updateAllTasks = require('./handlers/updateAllTasks')
const handleLogin = require('./handlers/handleLogin')
const showError = require('./handlers/showError')

router.get('/', showLogin)

router.post('/login', handleLogin)
router.get('/error', showError)

router.get('/tasks/todo', showPendingTasks)
router.get('/tasks/completed', showCompletedTasks)

router.route('/tasks')
  .post(addTask)
  .put(updateAllTasks)

router.route('/task/:id')
  .delete(removeTask)
  .put(editTask)

module.exports = router