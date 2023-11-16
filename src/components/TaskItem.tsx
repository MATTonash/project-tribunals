import {
  Button,
  Checkbox,
  Divider,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { GoCheckCircle, GoCircle } from "react-icons/go";
import Task from "../lib/Task";

interface Props {
  task: Task;
  isAlternate: boolean;
}

const TaskItem = ({ task, isAlternate }: Props) => {
  // const entryTypeMappings = {
  //   Drop: "Label",
  //   text: "Text entry",
  //   number: "Numerical entry",
  //   multi: "Multi-type entry",
  //   default: "Custom entry",
  // };

  return (
    <Flex
      height="70px"
      gap={2}
      alignItems="center"
      p={4}
      bg={isAlternate === true ? "stoneGray.50" : "white"}
    >
      <Checkbox colorScheme="salmon" />
      <Button variant="link" fontWeight={600} size="lg" colorScheme="black">
        {task.name}
      </Button>
      <Divider orientation="vertical" borderColor="black" />
      <Text fontSize="lg">
        {"Entry Type"} {`(Entry Count)`}
      </Text>
      <Spacer />
      {/* {task.entryCount > 0 ? (
        <GoCheckCircle fontSize={32} />
      ) : (
        <GoCircle fontSize={32} />
      )} */}
    </Flex>
  );
};

export default TaskItem;
