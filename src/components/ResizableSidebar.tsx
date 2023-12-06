import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Select,
  Spacer,
  Textarea,
  ToastId,
  useToast,
} from "@chakra-ui/react";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { Task } from "../lib/Task";
import SidebarHeader from "./SidebarHeader";
import TaskItem from "./TaskItem";
import { TaskInputs } from "./input/TaskInputs";

interface ResizableSidebarProps {
  tasks: Array<Task>;
}

const ResizableSidebar = ({ tasks }: ResizableSidebarProps) => {
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(0);

  const [currentTask, setCurrentTask] = useState<Task | null>(null);
  const [selectedTasks, setSelectedTasks] = useState<Array<Task>>([]);
  const [listedTasks, setListedTasks] = useState<Array<Task>>(tasks);

  const dividerRef = useRef<HTMLHRElement | null>(null);
  const toast = useToast();
  const toastIdRef = useRef<ToastId | null>(null);

  useEffect(() => {
    if (selectedTasks.length > 0 && !toastIdRef.current) {
      toastIdRef.current = toast({
        position: "bottom-left",
        duration: null,

        render: () => <Button>Start tasks</Button>,
      });
    } else if (selectedTasks.length === 0 && toastIdRef.current) {
      toast.close(toastIdRef.current);
      toastIdRef.current = null;
    }
  }, [selectedTasks]);

  useEffect(() => {
    return () => {
      if (toastIdRef.current) {
        toast.close(toastIdRef.current);
        toastIdRef.current = null;
      }
    };
  }, []);

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

  const handleCheckboxChange = (
    event: ChangeEvent<HTMLInputElement>,
    task: Task
  ) => {
    if (event.target.checked) {
      setSelectedTasks(selectedTasks.concat(task));
    } else {
      setSelectedTasks(selectedTasks.filter((t) => t !== task));
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
          task={currentTask}
          addTask={() => {}}
          deleteTask={() => {
            setListedTasks(
              listedTasks.filter((task) => !selectedTasks.includes(task))
            );
            setSelectedTasks([]);
          }}
          goBack={() => setCurrentTask(null)}
        />
        {currentTask ? (
          <Flex flexDirection={"column"} height={"100%"} p={2}>
            <FormControl>
              <Flex flexDirection={"column"} gap={4}>
                <Box>
                  <FormLabel>Country</FormLabel>
                  <Select placeholder="Select country">
                    <option>United Arab Emirates</option>
                    <option>Nigeria</option>
                  </Select>
                </Box>
                <Box>
                  <FormLabel>Basic Usage</FormLabel>
                  <Input placeholder="Basic usage" />
                  <FormHelperText>Some helper text</FormHelperText>
                </Box>
                <Textarea placeholder="Here is a sample placeholder" />
              </Flex>
            </FormControl>
            <Spacer />
            <Button>Save</Button>
          </Flex>
        ) : (
          listedTasks.map((task, index) => (
            <TaskItem
              task={task}
              key={task.id}
              isAlternate={index % 2 === 1}
              onClick={() => {
                setSelectedTasks([]);
                setCurrentTask(task);
              }}
              onCheckboxChange={(event) => handleCheckboxChange(event, task)}
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
