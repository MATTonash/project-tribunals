import { Flex } from '@chakra-ui/react'

import { useEffect, useRef, useState } from 'react'
import { GhostHighlight, PdfHighlighterUtils } from 'react-pdf-highlighter-extended'
import { useParams } from 'react-router-dom'
import {
  AnnotatedDocument,
  FieldValue,
  RevTag,
  Task,
  TaskHighlight,
  TaskInstance
} from 'src/common/types'
import ResizableSidebar from '../../components/ResizableSidebar'
import PdfViewer from './components/PdfViewer'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { AnnotatorContext, TaskFormRef } from './context/AnnotatorContext'

const Annotator = () => {
  const { documentId, taskId } = useParams()

  const [document, setDocument] = useState<(AnnotatedDocument & RevTag) | undefined>(undefined)
  const [taskInstance, setTaskInstance] = useState<(TaskInstance & RevTag) | undefined>(undefined)
  const [task, setTask] = useState<(Task & RevTag) | undefined>(undefined)

  const [highlights, setHighlights] = useState<TaskHighlight[]>([])

  // What fieldtype should be linked to the current ghosthighlight
  const [highlightPicker, setHighlightPicker] = useState<string | null>(null)

  const pdfHighlighterUtilsRef = useRef<PdfHighlighterUtils | undefined>()
  const taskFormRef = useRef<TaskFormRef | undefined>(undefined)

  const fetchDocument = () => {
    if (documentId) {
      window.ipc.getAnnotatedDocument(documentId).then((annotatedDoc) => {
        setDocument(annotatedDoc)
      })
    }
  }

  const fetchTask = () => {
    if (taskId && document) {
      window.ipc.getTaskInstance(document.tasks[taskId]).then((newTaskInstance) => {
        setTaskInstance(newTaskInstance)
        setHighlights(newTaskInstance.highlights)
      })

      window.ipc.getTask(taskId).then((newTask) => {
        setTask(newTask)
      })
    }
  }

  useEffect(() => {
    fetchDocument()

    return () => {
      setDocument(undefined)
    }
  }, [documentId])

  useEffect(() => {
    fetchTask()

    return () => {
      setTask(undefined)
      setTaskInstance(undefined)
      setHighlights([])
      pdfHighlighterUtilsRef.current?.removeGhostHighlight()
      setHighlightPicker(null)
    }
  }, [taskId])

  const addHighlight = (highlight: GhostHighlight, fieldTypeId: string, index?: number) => {
    console.log('Saving highlight', highlight)
    if (index === undefined) {
      index = taskFormRef.current!.values[fieldTypeId].length - 1
    }

    taskFormRef.current?.setFieldValue(
      `${fieldTypeId}.${index}.value`,
      highlight.content.text ?? ''
    )

    pdfHighlighterUtilsRef.current?.removeGhostHighlight()

    setHighlights(
      highlights.concat({
        ...highlight,
        fieldTypeName: task!.fieldTypes[fieldTypeId].name,
        id: taskFormRef.current!.values[fieldTypeId][index!].fieldId
      })
    )
  }

  const removeHighlight = (fieldId: string) => {
    setHighlights(highlights.filter((highlight) => highlight.id != fieldId))
  }

  const saveForm = (values: { [fieldTypeId: string]: FieldValue[] }) => {
    Object.entries(values).forEach(([fieldTypeId, fieldArray]) => {
      taskInstance!.inputFields[fieldTypeId] = fieldArray
    })

    console.log(JSON.stringify(values, null, 2))

    taskInstance!.highlights = highlights
    window.ipc.putTaskInstance(taskInstance!).then(() => {
      fetchTask()
    })
  }

  return (
    <Flex height="calc(100vh - 64px)">
      {document && (
        <AnnotatorContext.Provider
          value={{
            taskFormRef,
            addHighlight,
            removeHighlight,
            highlights,
            pdfHighlighterUtilsRef,
            highlightPicker,
            setHighlightPicker,
            saveForm,
            document,
            task,
            taskInstance
          }}
        >
          <ResizableSidebar>{taskId === undefined ? <TaskList /> : <TaskForm />}</ResizableSidebar>
          <PdfViewer />
        </AnnotatorContext.Provider>
      )}
    </Flex>
  )
}

export default Annotator
