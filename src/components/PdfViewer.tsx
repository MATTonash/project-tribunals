import { Flex } from "@chakra-ui/react";
import { Ref, useEffect, useState } from "react";
import {
  GhostHighlight,
  Highlight,
  PdfHighlighter,
  PdfLoader,
  PdfScaleValue,
} from "react-pdf-highlighter-extended";
import PdfViewerHeader from "./PdfViewerHeader";
import { documentsDb } from "../lib/dummy-data/documentsDb";
import SelectionTip from "./SelectionTip";
import { FieldId, Task, TaskId } from "../lib/types";
import HighlightContainer from "./HighlightContainer";
import { tasksDb } from "../lib/dummy-data/tasksDb";
import { useAnnotatorUtils } from "../context/AnnotatorContext";

interface PdfViewerProps {
  documentId: string;
  taskId?: TaskId;
}

const getHighlights = (documentId: string, taskId?: TaskId) =>
  taskId
    ? Object.values(
        documentsDb[documentId].tasks[taskId].inputFields || {},
      ).flatMap((inputField) =>
        inputField.highlight ? [inputField.highlight] : [],
      )
    : [];

const PdfViewer = ({ documentId, taskId }: PdfViewerProps) => {
  const [pdfScaleValue, setPdfScaleValue] = useState<PdfScaleValue>("auto");
  const [highlights, setHighlights] = useState<Array<Highlight>>(
    getHighlights(documentId, taskId),
  );

  const { taskFormRef } = useAnnotatorUtils();

  const addHighlight = (highlight: GhostHighlight, fieldId: FieldId) => {
    console.log("Saving highlight", highlight);
    taskFormRef.current?.setFieldValue(fieldId, highlight.content.text ?? "");
    documentsDb[documentId].tasks[taskId!].inputFields[fieldId].highlight = {
      ...highlight,
      comment: { text: tasksDb[taskId!].inputFields[fieldId].name },
      id: fieldId,
    };

    setHighlights(getHighlights(documentId, taskId));
  };

  useEffect(() => {
    setHighlights(getHighlights(documentId, taskId));
  }, [documentId, taskId]);

  return (
    <Flex flexDirection={"column"} flexGrow={"1"}>
      <PdfViewerHeader
        pdfScaleValue={pdfScaleValue}
        setPdfScaleValue={setPdfScaleValue}
      />
      <Flex flexGrow="1" position="relative" overflowY="clip">
        <PdfLoader document={documentsDb[documentId].url}>
          <PdfHighlighter
            pdfScaleValue={pdfScaleValue}
            highlights={highlights}
            selectionTip={
              taskId ? (
                <SelectionTip
                  documentId={documentId}
                  taskId={taskId}
                  addHighlight={addHighlight}
                />
              ) : undefined
            }
          >
            <HighlightContainer />
          </PdfHighlighter>
        </PdfLoader>
      </Flex>
    </Flex>
  );
};

export default PdfViewer;
