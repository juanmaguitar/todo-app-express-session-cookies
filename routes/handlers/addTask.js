const { addTask } = require('../../services/tasks')

function _addTask( req, res ) {
  const { tasks } = req.session
  const { title } = req.body
  tasks.addTask(title)
  res.redirect("/tasks/todo")
}

module.exports = _addTask