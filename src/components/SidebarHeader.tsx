import { Flex } from "@chakra-ui/layout";
import { Heading, IconButton, Spacer } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin7Line } from "react-icons/ri";
import { IoReturnUpBack } from "react-icons/io5";
import { Task } from "../lib/types";

interface SidebarHeaderProps {
  task: Task | null;
  addTask: () => void;
  deleteTask: () => void;
  goBack: () => void;
}

/**
 * @deprecated Please use headers for TaskList and TaskForm
 */
const SidebarHeader = ({
  task,
  addTask,
  deleteTask,
  goBack,
}: SidebarHeaderProps) => {
  return (
    <Flex
      h={"36px"}
      gap={2}
      px={4}
      alignItems={"center"}
      //   justifyContent={"space-between"}
      borderBottom="1px"
      borderBottomColor="stoneGray.200"
    >
      <Heading as="h2" size="md">
        <b>{task ? task.name : "Tasks"}</b>
      </Heading>
      <Spacer />
      {task ? (
        <IconButton
          aria-label="Cancel task"
          icon={<IoReturnUpBack />}
          size={"sm"}
          fontSize={"22"}
          variant="ghost"
          onClick={goBack}
        />
      ) : (
        <>
          <IconButton
            aria-label="Add Task"
            icon={<AiOutlinePlus />}
            size={"sm"}
            fontSize={"22"}
            variant="ghost"
            onClick={addTask}
          />
          <IconButton
            aria-label="Delete Task"
            icon={<RiDeleteBin7Line />}
            size={"sm"}
            fontSize={"22"}
            variant="ghost"
            onClick={deleteTask}
          />
        </>
      )}
      <Heading as="h3" size="sm" color="stormGray.500">
        2 / 11
      </Heading>
    </Flex>
  );
};

export default SidebarHeader;
