import {
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Text,
  Textarea,
  ToastId,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { Field, FieldProps, Form, Formik } from "formik";
import { Ref, useImperativeHandle, useRef } from "react";
import { documentsDb } from "../lib/dummy-data/documentsDb";
import { tasksDb } from "../lib/dummy-data/tasksDb";
import { FieldId, InputFieldValue, TaskId } from "../lib/types";
import TaskFormHeader from "./TaskFormHeader";
import { TaskFormRef, useAnnotatorUtils } from "../context/AnnotatorContext";

interface TaskFormProps {
  taskId: TaskId;
  documentId: string;
}

const TaskForm = ({ taskId, documentId }: TaskFormProps) => {
  const task = tasksDb[taskId];
  const toast = useToast();
  const toastIdRef = useRef<ToastId | null>(null);
  const { taskFormRef } = useAnnotatorUtils();

  return (
    <>
      <TaskFormHeader name={task.name} documentId={documentId} />
      <VStack alignItems={"unset"} p={2}>
        <Text> {task.description}</Text>
        <Formik
          initialValues={Object.keys(task.inputFields).reduce(
            (acc, fieldId) => ({
              ...acc,
              [fieldId]:
                documentsDb[documentId].tasks[taskId].inputFields[fieldId]
                  .input,
            }),
            {},
          )}
          onSubmit={(values, actions) => {
            setTimeout(() => {
              console.log(values);
              Object.entries(values).forEach(([fieldId, input]) => {
                documentsDb[documentId].tasks[taskId].inputFields[
                  fieldId
                ].input = input as InputFieldValue;
              });
              documentsDb[documentId].tasks[taskId].status = "complete";
              alert(JSON.stringify(values, null, 2));
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
            taskFormRef.current = {
              setFieldValue: (fieldId, value) =>
                props.setFieldValue(fieldId, value),
            };

            return (
              <Form>
                {Object.keys(task.inputFields).map((fieldId) => {
                  const inputField = task.inputFields[fieldId];

                  return (
                    <Field name={fieldId} key={fieldId}>
                      {({ field, form }: FieldProps) => {
                        console.log(field);
                        return (
                          <FormControl
                            isRequired={inputField.isRequired}
                            isInvalid={Boolean(form.errors[fieldId])}
                          >
                            <FormLabel>{inputField.name}</FormLabel>
                            {inputField.container === "shorttext" ? (
                              <Input {...field} placeholder={inputField.name} />
                            ) : inputField.container === "longtext" ? (
                              <Textarea
                                {...field}
                                placeholder={inputField.name}
                              />
                            ) : inputField.container === "dropdown" ? (
                              <Select {...field}>
                                {inputField.options?.map((value, index) => (
                                  <option key={index}>{value}</option>
                                ))}
                              </Select>
                            ) : inputField.container === "number" ? (
                              <div>Number Input broken at the moment</div>
                            ) : null}
                            {inputField.hint && (
                              <FormHelperText>{inputField.hint}</FormHelperText>
                            )}
                          </FormControl>
                        );
                      }}
                    </Field>
                  );
                })}
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
