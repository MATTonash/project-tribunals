import { Divider, Flex } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import Task from "../lib/Task";
import SidebarHeader from "./SidebarHeader";
import TaskItem from "./TaskItem";
import { TaskInputs } from "./input/TaskInputs";

interface ResizableSidebarProps {
  tasks: Array<Task>;
}

const ResizableSidebar = ({ tasks }: ResizableSidebarProps) => {
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(0);

  const [selectedTask, setSelectedTask] = useState<Task | null>(null);

  const dividerRef = useRef<HTMLHRElement | null>(null);

  const handleMouseDown = () => {
    setIsResizing(true);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (isResizing) {
      setSidebarWidth(event.clientX);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <Flex
      width={sidebarWidth}
      minHeight="100%"
      minWidth="400px"
      maxWidth={"70%"}
      overflowY={"auto"}
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        WebkitOverflowScrolling: "touch",
      }}
      css={{ "&::-webkit-scrollbar": { display: "none" } }}
    >
      <Flex minWidth={"calc(100% - 10px)"} flexDirection="column">
        <SidebarHeader
          task={selectedTask}
          addTask={() => {}}
          deleteTask={() => {}}
          goBack={() => setSelectedTask(null)}
        />
        {selectedTask ? (
          <Flex flexDirection="column" gap={4} padding={2}>
            <TaskInputs task={selectedTask} />
          </Flex>
        ) : (
          tasks.map((task, index) => (
            <TaskItem
              task={task}
              key={task.key}
              isAlternate={index % 2 === 1}
              onClick={() => setSelectedTask(task)}
            />
          ))
        )}
      </Flex>
      <Divider
        ref={dividerRef}
        orientation="vertical"
        cursor="ew-resize"
        onMouseDown={handleMouseDown}
        borderWidth="5px"
        height="auto"
        opacity={1}
        borderColor={isResizing ? "stoneGray.900" : "stoneGray.200"}
      />
    </Flex>
  );
};

export default ResizableSidebar;
