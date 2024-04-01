import PouchDB from 'pouchdb'
import { RevTag, Task } from '../../common/types'

console.log('Initialising Tasks Database...')
const tasks = new PouchDB('data/tasks')
tasks.info().then((info) => {
  console.log('Tasks Database initialised!')
  console.log(info)
})

function putTask(task: Task): Promise<void> {
  return tasks
    .put(task)
    .then(() => {
      console.log('Task put successfully:', task._id, task.name)
    })
    .catch((error) => {
      console.error('Error putting task:', error)
    })
}

function getTask(taskId: string): Promise<Task & RevTag> {
  return tasks
    .get(taskId)
    .then((task) => {
      return task as Task & RevTag
    })
    .catch((error) => {
      console.error('Error getting task:', error)
      throw error
    })
}

// Shit implementation. Should use allDocs and Mango selectors
// Works for now
function getTasks(taskIds: string[]): Promise<Array<Task & RevTag>> {
  let tasks: Array<Task & RevTag> = []

  return Promise.all(
    taskIds.map((taskId) => {
      return getTask(taskId)
        .then((task) => {
          tasks.push(task)
        })
        .catch((error) => {
          console.error(`Error getting task with ID ${taskId}:`, error)
          throw error
        })
    })
  ).then(() => {
    return tasks
  })
}

function removeTask(task: Task & RevTag): Promise<void> {
  return tasks
    .remove(task)
    .then(() => {
      console.log('Task removed successfully:', task._id, task.name)
    })
    .catch((error) => {
      console.error('Error removing task:', error)
    })
}

export { putTask, getTask, removeTask }
