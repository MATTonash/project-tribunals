import { useState } from "react";
import Task from "../../lib/Task";
import TaskItem from "../TaskItem";
import { Button, Flex } from "@chakra-ui/react";
import { TaskInputs } from "../TaskInputs";
import { SidebarNavigationHeader } from "./SidebarNavigationHeader";

interface Props {
  tasks: Task[];
}

export const Sidebar = (props: Props) => {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const handleTaskClick = (task: Task) => {
    setSelectedTask(task);
  };

  const handleGoBack = () => {
    setSelectedTask(null);
  };

  return (
    <>
      <SidebarNavigationHeader />
      {selectedTask ? (
        <Flex flexDirection="column" gap={4}>
          <Button onClick={handleGoBack}>Back</Button>
          <TaskInputs task={selectedTask} />
        </Flex>
      ) : (
        props.tasks.map((task, index) => (
          <TaskItem
            task={task}
            key={task.key}
            isAlternate={index % 2 === 1}
            onClick={handleTaskClick}
          />
        ))
      )}
    </>
  );
};
