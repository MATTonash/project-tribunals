import {
  Button,
  Checkbox,
  Divider,
  Flex,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { ChangeEvent, MouseEvent } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { Task } from "../lib/Task";
import { IoCheckmark, IoCheckmarkDoneSharp } from "react-icons/io5";

interface Props {
  task: Task;
  isAlternate: boolean;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  onCheckboxChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TaskItem = ({ task, isAlternate, onClick, onCheckboxChange }: Props) => {
  return (
    <Flex
      height="70px"
      gap={2}
      alignItems="center"
      p={4}
      bg={isAlternate === true ? "stoneGray.50" : "white"}
    >
      <Checkbox colorScheme="salmon" onChange={onCheckboxChange} />
      <Button
        variant="link"
        fontWeight={600}
        size="lg"
        colorScheme="black"
        onClick={onClick}
      >
        {task.name}
      </Button>
      <Spacer />
      {task.validation === "auto" ? (
        <IoCheckmark fontSize={24} />
      ) : task.validation === "human" ? (
        <IoCheckmark fontSize={24} color={"green"} />
      ) : task.validation === "double" ? (
        <IoCheckmarkDoneSharp fontSize={24} color={"green"} />
      ) : null}
    </Flex>
  );
};

export default TaskItem;
