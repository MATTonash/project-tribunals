import { Button, ToastId, useToast } from '@chakra-ui/react'
import { ChangeEvent, useEffect, useRef, useState } from 'react'
import TaskItem from './TaskItem'
import TaskListHeader from './TaskListHeader'
import { useAnnotatorUtils } from '../context/AnnotatorContext'
import { RevTag, Task } from 'src/common/types'

const TaskList = () => {
  const { document } = useAnnotatorUtils()
  const [selectedTasks, setSelectedTasks] = useState<Array<string>>([])
  const [tasks, setTasks] = useState<Array<Task & RevTag>>([])

  useEffect(() => {
    window.ipc.getTasks(Object.keys(document.tasks)).then((newTasks) => {
      setTasks(newTasks)
    })
  }, [])

  const toast = useToast()
  const toastIdRef = useRef<ToastId | null>(null)

  const resetToast = () => {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current)
      toastIdRef.current = null
    }
  }

  useEffect(() => {
    if (selectedTasks.length > 0 && !toastIdRef.current) {
      toastIdRef.current = toast({
        position: 'bottom-left',
        duration: null,
        render: () => <Button>Start tasks</Button>
      })
    } else if (selectedTasks.length === 0) {
      resetToast()
    }
  }, [selectedTasks])

  useEffect(() => resetToast, [])

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
          // selectedTasks.forEach((taskId) => {
          //   delete documentsDb[documentId].tasks[taskId]
          // })
          // setSelectedTasks([])
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
