import { useState } from "react";
import Task from "../lib/Task";
import { Flex } from "@chakra-ui/react";
import TaskItem from "./TaskItem";
import { TaskInput } from "./TaskInput";

interface Props {
  tasks: Task[];
}

export const Sidebar = (props: Props) => {
  const [selectedTask, setSelectedTask] = useState(null);

  const handleTaskClick = (task: TaskItem) => {
    setSelectedTask(task);
  };

  const handleGoBack = () => {
    setSelectedTask(null);
  };

  return (
    <>
      {props.tasks.map((task, index) => (
        <TaskItem task={task} key={task.key} isAlternate={index % 2 === 1} />
      ))}
    </>
    // <Flex flexDirection="column" width="30vw" maxWidth="500px">
    //   {selectedTask ? (
    //     tasks.map((task, index) => (
    //       <TaskItem
    //         task={task}
    //         key={task.key}
    //         isAlternate={index % 2 === 1}
    //         // onClick={handleTaskClick}
    //       />
    //     ))
    //   ) : (
    //     // <TaskInput />
    //     <></>
    //   )}
    // </Flex>
  );
};
