import { ChangeEvent, useEffect, useState } from 'react'
import { RevTag, Task } from 'src/common/types'
import { useAnnotatorUtils } from '../context/AnnotatorContext'
import TaskItem from './TaskItem'
import TaskListHeader from './TaskListHeader'

const TaskList = () => {
  const { document, saveDocument } = useAnnotatorUtils()
  const [selectedTasks, setSelectedTasks] = useState<Array<string>>([])
  const [tasks, setTasks] = useState<Array<Task & RevTag>>([])

  const fetchTasks = () => {
    window.ipc.getTasks(Object.keys(document.tasks)).then((newTasks) => {
      setTasks(newTasks)
    })
  }

  useEffect(() => {
    fetchTasks()
  }, [])

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>, taskId: string) => {
    setSelectedTasks(
      event.target.checked
        ? selectedTasks.concat(taskId)
        : selectedTasks.filter((_id) => _id !== taskId)
    )
  }

  return (
    <>
      <TaskListHeader
        addTask={() => {}}
        deleteTasks={() => {
          selectedTasks.forEach((taskId) => {
            delete document.tasks[taskId]
          })
          saveDocument()
          setSelectedTasks([])
          fetchTasks()
        }}
      />
      {tasks.map((task, index) => (
        <TaskItem
          task={task}
          key={task._id}
          index={index}
          onClick={() => {
            setSelectedTasks([])
          }}
          onCheckboxChange={(event) => handleCheckboxChange(event, task._id)}
        />
      ))}
    </>
  )
}

export default TaskList
