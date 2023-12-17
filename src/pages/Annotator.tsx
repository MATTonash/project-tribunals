import { Flex } from "@chakra-ui/react";

import { useRef } from "react";
import { useParams } from "react-router-dom";
import PdfViewer from "../components/PdfViewer";
import ResizableSidebar from "../components/ResizableSidebar";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import {
  AnnotatorContext,
  PdfViewerRef,
  TaskFormRef,
} from "../context/AnnotatorContext";
import { documentsDb } from "../lib/dummy-data/documentsDb";

const Annotator = () => {
  const { documentId, taskId } = useParams();
  const taskFormRef = useRef<TaskFormRef | undefined>(undefined);
  const highlightsRef = useRef<PdfViewerRef | undefined>(undefined);

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
