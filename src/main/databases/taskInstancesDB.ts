import PouchDB from 'pouchdb'
import { RevTag, TaskInstance } from '../../common/types'

console.log('Initialising Task Instances Database...')
const taskInstances = new PouchDB('data/taskInstances')
taskInstances.info().then((info) => {
  console.log('Task Instances Database initialised!')
  console.log(info)
})

function putTaskInstance(taskInstance: TaskInstance): Promise<void> {
  return taskInstances
    .put(taskInstance)
    .then(() => {
      console.log('Task Instance put successfully:', taskInstance._id)
    })
    .catch((error) => {
      console.error('Error putting task instance:', error)
    })
}

function getTaskInstance(taskInstanceId: string): Promise<TaskInstance & RevTag> {
  return taskInstances
    .get(taskInstanceId)
    .then((taskInstance) => {
      return taskInstance as TaskInstance & RevTag
    })
    .catch((error) => {
      console.error('Error getting task instance:', error)
      throw error
    })
}

function removeTaskInstance(taskInstance: TaskInstance & RevTag): Promise<void> {
  return taskInstances
    .remove(taskInstance)
    .then(() => {
      console.log('Task instanced removed successfully:', taskInstance._id)
    })
    .catch((error) => {
      console.error('Error removing task instance:', error)
    })
}

export { putTaskInstance, getTaskInstance, removeTaskInstance }
