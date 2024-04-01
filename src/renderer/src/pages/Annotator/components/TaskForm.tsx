import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Text,
  ToastId,
  VStack,
  useToast
} from '@chakra-ui/react'
import { Field, FieldArray, FieldProps, Form, Formik } from 'formik'
import { useRef, useState } from 'react'
import { useAnnotatorUtils } from '../context/AnnotatorContext'
import TaskFormHeader from './TaskFormHeader'

const TaskForm = () => {
  const {
    taskFormRef,
    addHighlight,
    removeHighlight,
    highlightPicker,
    setHighlightPicker,
    pdfHighlighterUtilsRef,
    saveForm,
    document,
    task,
    taskInstance
  } = useAnnotatorUtils()

  if (!taskInstance || !task) {
    return <div>Something fucked up</div>
  }

  let inputFields = taskInstance.inputFields
  const toast = useToast()
  const toastIdRef = useRef<ToastId | null>(null)

  return (
    <>
      <TaskFormHeader />
      <VStack alignItems={'unset'} p={2}>
        <Text> {task.description}</Text>
        <Formik
          initialValues={inputFields}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              saveForm(values)
              actions.setSubmitting(false)
              toastIdRef.current = toast({
                title: 'Saved!',
                position: 'bottom-left',
                status: 'success',
                duration: 1000,
                isClosable: true
              })
            }, 1000)
          }}
        >
          {(props) => {
            props.values['fieldTypeId1'].length
            taskFormRef.current = {
              values: props.values,
              setFieldValue: props.setFieldValue
            }

            return (
              <Form>
                {Object.keys(props.values).map((fieldTypeId) => (
                  <FieldArray
                    name={fieldTypeId}
                    key={fieldTypeId}
                    render={(arrayHelpers) => (
                      <>
                        <FormLabel>{task.fieldTypes[fieldTypeId].name}</FormLabel>
                        {props.values[fieldTypeId].map((inputField, index) => (
                          <Field name={`${fieldTypeId}.${index}.value`} key={index}>
                            {({ field }: FieldProps) => (
                              <FormControl isRequired={task.fieldTypes[fieldTypeId].isRequired}>
                                <Input {...field} />
                                <HStack>
                                  {' '}
                                  {props.values[fieldTypeId].length > 1 && (
                                    <Button
                                      variant="link"
                                      colorScheme="red"
                                      size={'sm'}
                                      onClick={() => {
                                        removeHighlight(inputField._id)
                                        arrayHelpers.remove(index)
                                      }}
                                    >
                                      Remove field
                                    </Button>
                                  )}
                                  {highlightPicker === fieldTypeId && (
                                    <Button
                                      variant="link"
                                      colorScheme="yellow"
                                      size={'sm'}
                                      onClick={() => {
                                        setHighlightPicker(null)
                                        const ghostHighlight =
                                          pdfHighlighterUtilsRef.current?.getGhostHighlight()
                                        addHighlight(
                                          {
                                            content: ghostHighlight!.content,
                                            position: ghostHighlight!.position
                                          },
                                          fieldTypeId,
                                          index
                                        )
                                      }}
                                    >
                                      Link Highlight
                                    </Button>
                                  )}
                                </HStack>
                              </FormControl>
                            )}
                          </Field>
                        ))}
                        <Button
                          variant="link"
                          colorScheme="green"
                          size={'sm'}
                          onClick={() => {
                            arrayHelpers.insert(props.values[fieldTypeId].length, {
                              value: '',
                              fieldId: 'fieldIdExtra'
                            })
                          }}
                        >
                          Add field
                        </Button>
                      </>
                    )}
                  />
                ))}
                <Button mt={4} width="100%" isLoading={props.isSubmitting} type="submit">
                  Save
                </Button>
              </Form>
            )
          }}
        </Formik>
      </VStack>
    </>
  )
}

export default TaskForm
