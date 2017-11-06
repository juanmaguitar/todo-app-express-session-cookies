const { editTask } = require('../../services/tasks')
const debug = require('debug')('edit-task')

function _editTask( req, res ) {
  const { tasks } = req.session
  const { id } = req.params
  const { completed, title } = req.body
  debug({ id, completed, title })
  tasks.editTask(id, { completed, title })
  res.status(200).send(`task w/ id ${id} has been edited succesfully`)
}

module.exports = _editTask