import { Flex, Heading, IconButton, Spacer } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin7Line } from "react-icons/ri";
import { getProgress } from "../lib/get-progress";

interface TaskListHeaderProps {
  documentId: string;
  addTask: () => void;
  deleteTasks: () => void;
}

const TaskListHeader = ({
  documentId,
  addTask,
  deleteTasks,
}: TaskListHeaderProps) => {
  const { completedTasks, totalTasks } = getProgress(documentId);

  return (
    <Flex
      h={"36px"}
      gap={2}
      px={4}
      alignItems={"center"}
      borderBottom="1px"
      borderBottomColor="stoneGray.200"
    >
      <Heading as="h2" size="md">
        <b>Tasks</b>
      </Heading>
      <Spacer />
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
        onClick={deleteTasks}
      />
      <Heading as="h3" size="sm" color="stormGray.500">
        {completedTasks} / {totalTasks}
      </Heading>
    </Flex>
  );
};

export default TaskListHeader;
