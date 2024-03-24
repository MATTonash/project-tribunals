import { Flex } from "@chakra-ui/react";

import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import PdfViewer from "./components/PdfViewer";
import ResizableSidebar from "../../components/ResizableSidebar";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { AnnotatorContext, TaskFormRef } from "./context/AnnotatorContext";
import { documentsDb } from "../../lib/dummy-data/documentsDb";
import {
  GhostHighlight,
  Highlight,
  PdfHighlighterUtils,
} from "react-pdf-highlighter-extended";

const Annotator = () => {
  const { documentId, taskId } = useParams();

  const fetchHighlights = () =>
    taskId ? documentsDb[documentId!].tasks[taskId].highlights : [];

  const [highlights, setHighlights] =
    useState<Array<Highlight>>(fetchHighlights());

  const [highlightPicker, setHighlightPicker] = useState<string | null>(null); // What fieldtype should be linked to the current ghosthighlight
  const pdfHighlighterUtilsRef = useRef<PdfHighlighterUtils | undefined>();

  const taskFormRef = useRef<TaskFormRef | undefined>(undefined);

  if (documentId === undefined || documentsDb[documentId] === undefined) {
    return <div>Invalid documentId</div>;
  }

  const addHighlight = (
    highlight: GhostHighlight,
    fieldTypeId: string,
    index?: number,
  ) => {
    console.log("Saving highlight", highlight);
    if (index === undefined) {
      index = taskFormRef.current!.values[fieldTypeId].length - 1;
    }

    taskFormRef.current?.setFieldValue(
      `${fieldTypeId}.${index}.value`,
      highlight.content.text ?? "",
    );

    pdfHighlighterUtilsRef.current?.removeGhostHighlight();

    setHighlights(
      highlights.concat({
        ...highlight,
        id: taskFormRef.current!.values[fieldTypeId][index!].fieldId,
      }),
    );
  };

  const removeHighlight = (fieldId: string) => {
    setHighlights(highlights.filter((highlight) => highlight.id != fieldId));
  };

  const saveHighlights = () => {
    documentsDb[documentId].tasks[taskId!].highlights = highlights;
  };

  useEffect(() => {
    setHighlights(fetchHighlights());
  }, [documentId, taskId]);

  return (
    <Flex height="calc(100vh - 64px)">
      <AnnotatorContext.Provider
        value={{
          taskFormRef,
          addHighlight,
          removeHighlight,
          highlights,
          saveHighlights,
          pdfHighlighterUtilsRef,
          highlightPicker,
          setHighlightPicker,
        }}
      >
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
