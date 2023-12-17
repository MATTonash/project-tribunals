import { Flex, useToast } from "@chakra-ui/react";

import PdfViewer from "../components/PdfViewer";
import ResizableSidebar from "../components/ResizableSidebar";
import { tasksDb } from "../lib/dummy-data/tasksDb";
import { useParams } from "react-router-dom";
import { documentsDb } from "../lib/dummy-data/documentsDb";
import TaskList from "../components/TaskList";
import TaskListHeader from "../components/TaskListHeader";
import { useRef, useState } from "react";
import { TaskId } from "../lib/types";
import { AnnotatorContext, TaskFormRef } from "../context/AnnotatorContext";
import { Highlight } from "react-pdf-highlighter-extended";
import TaskForm from "../components/TaskForm";

const Annotator = () => {
  const { documentId, taskId } = useParams();
  const taskFormRef = useRef<TaskFormRef>(null);
  const highlightsRef = useRef<Highlight[]>([]);

  if (documentId === undefined || documentsDb[documentId] === undefined) {
    return <div>Invalid documentId</div>;
  }

  return (
    <Flex height="calc(100vh - 64px)">
      <AnnotatorContext.Provider value={{ taskFormRef, highlightsRef }}>
        <ResizableSidebar>
          {taskId === undefined ? (
            <TaskList documentId={documentId} />
          ) : (
            <TaskForm documentId={documentId} taskId={taskId} />
          )}
        </ResizableSidebar>
        <PdfViewer documentId={documentId} taskId={taskId} />
      </AnnotatorContext.Provider>
    </Flex>
  );
};

export default Annotator;
