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
