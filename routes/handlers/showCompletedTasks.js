const { getCompletedTasks } = require('../../services/tasks')

function showCompletedTasks (req,res) {
  const { tasks } = req.session
  const section = "completed"
  const title = "COMPLETED Tasks"
  const completedTasks = tasks.getCompletedTasks()
  res.render('completed', { tasks: completedTasks, title, section })
}

module.exports = showCompletedTasks