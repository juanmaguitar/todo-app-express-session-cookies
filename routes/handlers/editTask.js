const { editTask } = require('../../services/tasks')
const debug = require('debug')('edit-task')

function _editTask( req, res ) {
  const { id } = req.params
  const { completed, title } = req.body
  debug({ id, completed, title })
  editTask(id, { completed, title })
  res.status(200).send(`task w/ id ${id} has been edited succesfully`)
}

module.exports = _editTask