const uuid = require('uuid/v1')

function getPendingTasks() {
  return this.filter( task => !task.completed )
}

function getCompletedTasks() {
  return this.filter( task => task.completed )
}

function addTask(title) {
  const newTask = {
    title,
    id: uuid(),
    createdAt: +new Date(),
    completed: false
  }
  this.push(newTask)
}

function removeTask(id) {
  this.tasks = this.filter( task => task.id !== id)
}

function editTask(id, dataToEdit ) {
  const { completed, title } = dataToEdit
  this.tasks = this.map( task => {
    if (task.id === id) {
      task.completed = completed || task.completed
      task.title = title || task.title
    }
    return task
  })
}

function updateAllTasks( dataToEdit ) {
  const { completed } = dataToEdit
  this.tasks = this.map( task => {
    task.completed = completed || task.completed
    return task
  })
}

module.exports = { getPendingTasks, getCompletedTasks, addTask, removeTask, editTask, updateAllTasks}