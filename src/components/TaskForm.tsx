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
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { TaskId } from "../lib/types";
import { tasksDb } from "../lib/dummy-data/tasksDb";
import { documentsDb } from "../lib/dummy-data/documentsDb";

interface TaskFormProps {
  taskId: TaskId;
  documentId: string;
}

const TaskForm = ({ taskId, documentId }: TaskFormProps) => {
  const task = tasksDb[taskId];

  return (
    <VStack alignItems={"unset"} p={2}>
      <Text> {task.description}</Text>
      <Formik
        initialValues={Object.keys(task.inputFields).reduce(
          (acc, fieldId) => ({
            ...acc,
            [fieldId]:
              documentsDb[documentId].tasks[taskId].inputFields[fieldId].input,
          }),
          {}
        )}
        onSubmit={(values, actions) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }, 1000);
        }}
      >
        {(props) => (
          <Form>
            {Object.keys(task.inputFields).map((fieldId) => {
              const inputField = task.inputFields[fieldId];

              return (
                <Field name={fieldId}>
                  {({ field, form }) => (
                    <FormControl>
                      <FormLabel>{inputField.name}</FormLabel>
                      {inputField.container === "shorttext" ? (
                        <Input {...field} placeholder={inputField.name} />
                      ) : inputField.container === "longtext" ? (
                        <Textarea {...field} placeholder={inputField.name} />
                      ) : inputField.container === "dropdown" ? (
                        <Select {...field}>
                          {inputField.options?.map((value) => (
                            <option>{value}</option>
                          ))}
                        </Select>
                      ) : inputField.container === "number" ? (
                        <NumberInput max={inputField.max} min={inputField.min}>
                          <NumberInputField {...field} />
                          <NumberInputStepper>
                            <NumberIncrementStepper />
                            <NumberDecrementStepper />
                          </NumberInputStepper>
                        </NumberInput>
                      ) : null}
                      {inputField.hint && (
                        <FormHelperText>{inputField.hint}</FormHelperText>
                      )}
                    </FormControl>
                  )}
                </Field>
              );
            })}
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={props.isSubmitting}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </VStack>
  );
};

export default TaskForm;
