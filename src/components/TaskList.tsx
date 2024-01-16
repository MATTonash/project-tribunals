import { Button, ToastId, useToast } from "@chakra-ui/react";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { documentsDb } from "../lib/dummy-data/documentsDb";
import TaskItem from "./TaskItem";
import TaskListHeader from "./TaskListHeader";

interface TaskListProps {
  documentId: string;
}

const TaskList = ({ documentId }: TaskListProps) => {
  const [selectedTasks, setSelectedTasks] = useState<Array<string>>([]);
  const tasks = Object.keys(documentsDb[documentId].tasks);

  const toast = useToast();
  const toastIdRef = useRef<ToastId | null>(null);

  const resetToast = () => {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
      toastIdRef.current = null;
    }
  };

  useEffect(() => {
    if (selectedTasks.length > 0 && !toastIdRef.current) {
      toastIdRef.current = toast({
        position: "bottom-left",
        duration: null,
        render: () => <Button>Start tasks</Button>,
      });
    } else if (selectedTasks.length === 0) {
      resetToast();
    }
  }, [selectedTasks]);

  useEffect(() => resetToast, []);

  const handleCheckboxChange = (
    event: ChangeEvent<HTMLInputElement>,
    taskId: string,
  ) => {
    setSelectedTasks(
      event.target.checked
        ? selectedTasks.concat(taskId)
        : selectedTasks.filter((_id) => _id !== taskId),
    );
  };

  return (
    <>
      <TaskListHeader
        documentId={documentId}
        addTask={() => {}}
        deleteTasks={() => {
          selectedTasks.forEach((taskId) => {
            delete documentsDb[documentId].tasks[taskId];
          });
          setSelectedTasks([]);
        }}
      />
      {tasks.map((taskId, index) => (
        <TaskItem
          documentId={documentId}
          taskId={taskId}
          key={taskId}
          index={index}
          onClick={() => {
            setSelectedTasks([]);
          }}
          onCheckboxChange={(event) => handleCheckboxChange(event, taskId)}
        />
      ))}
    </>
  );
};

export default TaskList;
