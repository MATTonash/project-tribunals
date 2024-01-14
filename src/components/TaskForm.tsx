import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
  Textarea,
  ToastId,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { Field, FieldArray, FieldProps, Form, Formik } from "formik";
import { useRef } from "react";
import { useAnnotatorUtils } from "../context/AnnotatorContext";
import { documentsDb } from "../lib/dummy-data/documentsDb";
import { tasksDb } from "../lib/dummy-data/tasksDb";
import TaskFormHeader from "./TaskFormHeader";
import { InputFieldValue } from "../lib/types";

interface TaskFormProps {
  taskId: string;
  documentId: string;
}

const TaskForm = ({ taskId, documentId }: TaskFormProps) => {
  let inputFields = documentsDb[documentId].tasks[taskId].inputFields;
  const task = tasksDb[taskId];
  const toast = useToast();
  const toastIdRef = useRef<ToastId | null>(null);
  const { taskFormRef, highlightsRef } = useAnnotatorUtils();

  return (
    <>
      <TaskFormHeader name={task.name} documentId={documentId} />
      <VStack alignItems={"unset"} p={2}>
        <Text> {task.description}</Text>
        <Formik
          initialValues={inputFields}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              // highlightsRef.current?.saveHighlights();
              // Object.entries(values).forEach(([fieldTypeId, fieldArray]) => {
              //   inputFields[fieldTypeId] = fieldArray;
              // });
              console.log(JSON.stringify(values, null, 2));
              // const isTaskComplete = Object.keys(inputFields).every(
              //   (fieldTypeId) => inputFields[fieldTypeId].length > 0,
              // );
              // documentsDb[documentId].tasks[taskId].status = isTaskComplete
              //   ? "complete"
              //   : "incomplete";
              actions.setSubmitting(false);
              toastIdRef.current = toast({
                title: "Saved!",
                position: "bottom-left",
                status: "success",
                duration: 1000,
                isClosable: true,
              });
            }, 1000);
          }}
        >
          {(props) => {
            props.values["fieldTypeId1"].length;
            // props.setFieldValue
            taskFormRef.current = {
              values: props.values,
              setFieldValue: props.setFieldValue,
            };

            return (
              <Form>
                {Object.keys(props.values).map((fieldTypeId) => (
                  <FieldArray
                    name={fieldTypeId}
                    key={fieldTypeId}
                    render={(arrayHelpers) => (
                      <>
                        <FormLabel>
                          {task.fieldTypes[fieldTypeId].name}
                        </FormLabel>
                        {props.values[fieldTypeId].map((field, index) => (
                          <Field
                            name={`${fieldTypeId}.${index}.value`}
                            key={index}
                          >
                            {({ field, form }: FieldProps) => (
                              <FormControl
                                isRequired={
                                  task.fieldTypes[fieldTypeId].isRequired
                                }
                              >
                                <Input {...field} />
                                <Button
                                  variant="link"
                                  colorScheme="red"
                                  size={"sm"}
                                  onClick={() => {
                                    arrayHelpers.remove(index);
                                  }}
                                >
                                  Remove field
                                </Button>
                              </FormControl>
                            )}
                          </Field>
                        ))}
                        <Button
                          variant="link"
                          colorScheme="green"
                          size={"sm"}
                          onClick={() => {
                            arrayHelpers.insert(
                              props.values[fieldTypeId].length,
                              { value: "", fieldId: "fieldIdExtra" },
                            );
                          }}
                        >
                          Add field
                        </Button>
                      </>
                    )}
                  />
                ))}
                <Button
                  mt={4}
                  width="100%"
                  isLoading={props.isSubmitting}
                  type="submit"
                >
                  Save
                </Button>
              </Form>
            );
          }}
        </Formik>
      </VStack>
    </>
  );
};

export default TaskForm;
