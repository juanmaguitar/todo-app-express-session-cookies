const { updateAllTasks } = require('../../services/tasks')

function _updateAllTasks( req, res ) {
  const { completed } = req.body
  updateAllTasks({ completed })
  res.status(200).send(`All tasks has been marked as completed`)
}

module.exports = _updateAllTasks