const { removeTask } = require('../../services/tasks')

function _removeTask( req, res ) {
  const { tasks } = req.session
  const { id } = req.params
  tasks.removeTask(id)
  res.status(200).send(`task w/ id ${id} has been removed succesfully`)
}

module.exports = _removeTask