const { getCompletedTasks } = require('../../services/tasks')

function showCompletedTasks (req,res) {
  const section = "completed"
  const title = "COMPLETED Tasks"
  const completedTasks = getCompletedTasks()
  res.render('completed', { tasks: completedTasks, title, section })
}

module.exports = showCompletedTasks