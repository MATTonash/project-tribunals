import { Flex, useToast } from "@chakra-ui/react";

import PdfViewer from "../components/PdfViewer";
import ResizableSidebar from "../components/ResizableSidebar";
import { tasksDb } from "../lib/dummy-data/tasksDb";
import { useParams } from "react-router-dom";
import { documentsDb } from "../lib/dummy-data/documentsDb";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import TaskListHeader from "../components/TaskListHeader";
import { useState } from "react";
import { TaskId } from "../lib/types";

const Annotator = () => {
  const { documentId, taskId } = useParams();

  if (documentId === undefined || documentsDb[documentId] === undefined) {
    return <div>Invalid documentId</div>;
  }

  return (
    <Flex height="calc(100vh - 64px)">
      <ResizableSidebar>
        {taskId === undefined ? (
          <TaskList documentId={documentId} />
        ) : (
          <TaskForm documentId={documentId} taskId={taskId} />
        )}
      </ResizableSidebar>
      {/* <Flex flexDirection="column" width="30vw" maxWidth="500px">
        {tasks.map((task, index) => (
          <TaskItem task={task} key={task.key} isAlternate={index % 2 === 1} />
        ))}
      </Flex> */}
      <PdfViewer documentId={documentId} />
    </Flex>
  );
};

export default Annotator;
