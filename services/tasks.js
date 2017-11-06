const uuid = require('uuid/v1')
let tasks

function setTasks( sessionTasks ) {
  tasks = sessionTasks
}

function getPendingTasks() {
  return tasks.filter( task => !task.completed )
}

function getCompletedTasks() {
  return tasks.filter( task => task.completed )
}

function addTask(title) {
  const newTask = {
    title,
    id: uuid(),
    createdAt: +new Date(),
    completed: false
  }
  tasks.push(newTask)
}

function removeTask(id) {
  tasks = tasks.filter( task => task.id !== id)
}

function editTask(id, dataToEdit ) {
  const { completed, title } = dataToEdit
  tasks = tasks.map( task => {
    if (task.id === id) {
      task.completed = completed || task.completed
      task.title = title || task.title
    }
    return task
  })
}

function updateAllTasks( dataToEdit ) {
  const { completed } = dataToEdit
  tasks = tasks.map( task => {
    task.completed = completed || task.completed
    return task
  })
}

module.exports = { setTasks, getPendingTasks, getCompletedTasks, addTask, removeTask, editTask, updateAllTasks }