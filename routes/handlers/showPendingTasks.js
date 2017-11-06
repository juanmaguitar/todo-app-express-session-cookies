const { getPendingTasks } = require('../../services/tasks')

function showPendingTasks (req,res) {
  const section = "todo"
  const title = "TODO Tasks"
  const todoTasks = getPendingTasks()
  res.render('todo', { tasks: todoTasks, title, section })
}

module.exports = showPendingTasks