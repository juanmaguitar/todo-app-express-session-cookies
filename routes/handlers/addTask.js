const { addTask } = require('../../services/tasks')

function _addTask( req, res ) {
  const { title } = req.body
  addTask(title)
  res.redirect("/tasks/todo")
}

module.exports = _addTask