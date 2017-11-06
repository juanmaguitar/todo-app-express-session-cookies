const { updateAllTasks } = require('../../services/tasks')

function _updateAllTasks( req, res ) {
  const { tasks } = req.session
  const { completed } = req.body
  tasks.updateAllTasks({ completed })
  res.status(200).send(`All tasks has been marked as completed`)
}

module.exports = _updateAllTasks