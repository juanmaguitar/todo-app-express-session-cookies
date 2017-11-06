const { getPendingTasks } = require('../../services/tasks')

function showPendingTasks (req,res) {
  const { tasks } = req.session
  const section = "todo"
  const title = "TODO Tasks"
  const todoTasks = tasks.getPendingTasks()
  res.render('todo', { tasks: todoTasks, title, section })
}

module.exports = showPendingTasks