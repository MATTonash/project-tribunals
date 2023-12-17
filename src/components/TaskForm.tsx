import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
  Text,
  FormHelperText,
  Textarea,
  Select,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  ToastId,
  useToast,
  Spacer,
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { FieldId, InputFieldValue, TaskId } from "../lib/types";
import { tasksDb } from "../lib/dummy-data/tasksDb";
import { documentsDb } from "../lib/dummy-data/documentsDb";
import TaskFormHeader from "./TaskFormHeader";
import { useRef } from "react";

interface TaskFormProps {
  taskId: TaskId;
  documentId: string;
}

const TaskForm = ({ taskId, documentId }: TaskFormProps) => {
  const task = tasksDb[taskId];
  const toast = useToast();
  const toastIdRef = useRef<ToastId | null>(null);

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
          {(props) => (
            <Form>
              {Object.keys(task.inputFields).map((fieldId) => {
                const inputField = task.inputFields[fieldId];

                return (
                  <Field name={fieldId} key={fieldId}>
                    {({ field, form }) => {
                      console.log(field);
                      return <FormControl
                        isRequired={inputField.isRequired}
                        isInvalid={form.errors[fieldId]}
                      >
                        <FormLabel>{inputField.name}</FormLabel>
                        {inputField.container === "shorttext" ? (
                          <Input {...field} placeholder={inputField.name} />
                        ) : inputField.container === "longtext" ? (
                          <Textarea {...field} placeholder={inputField.name} />
                        ) : inputField.container === "dropdown" ? (
                          <Select {...field}>
                            {inputField.options?.map((value, index) => (
                              <option key={index}>{value}</option>
                            ))}
                          </Select>
                        ) : inputField.container === "number" ? (
                          // <NumberInput
                          //   defaultValue={
                          //     documentsDb[documentId].tasks[taskId].inputFields[
                          //       fieldId
                          //     ].input
                          //   }
                          //   max={inputField.max}
                          //   min={inputField.min}
                          //   onChange={(_, valueAsNumber) => {
                          //     console.log("Called!")
                          //     form.handleChange();
                          //   }}
                          // >
                          //   <NumberInputField {...field} />
                          //   <NumberInputStepper>
                          //     <NumberIncrementStepper />
                          //     <NumberDecrementStepper />
                          //   </NumberInputStepper>
                          // </NumberInput>
                          <div>Number Input broken at the moment</div>
                        ) : null}
                        {inputField.hint && (
                          <FormHelperText>{inputField.hint}</FormHelperText>
                        )}
                      </FormControl>
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
          )}
        </Formik>
      </VStack>
    </>
  );
};

export default TaskForm;
