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
  onClick: (task: Task) => void;
}

const TaskItem = (props: Props) => {
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
      bg={props.isAlternate === true ? "stoneGray.50" : "white"}
      onClick={() => props.onClick(props.task)}
    >
      <Checkbox colorScheme="salmon" />
      <Button variant="link" fontWeight={600} size="lg" colorScheme="black">
        {props.task.name}
      </Button>
      <Divider orientation="vertical" borderColor="black" />
      <Text fontSize="lg">
        {props.task.entries.length === 1
          ? props.task.entries[0].displayName
          : "Multi-type entry"}{" "}
        {`(${props.task.entries.length})`}
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
