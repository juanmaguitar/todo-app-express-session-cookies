const { removeTask } = require('../../services/tasks')

function _removeTask( req, res ) {
  const { id } = req.params
  removeTask(id)
  res.status(200).send(`task w/ id ${id} has been removed succesfully`)
}

module.exports = _removeTask