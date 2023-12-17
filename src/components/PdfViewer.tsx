import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  GhostHighlight,
  Highlight,
  PdfHighlighter,
  PdfLoader,
  PdfScaleValue,
} from "react-pdf-highlighter-extended";
import { useAnnotatorUtils } from "../context/AnnotatorContext";
import { documentsDb } from "../lib/dummy-data/documentsDb";
import { tasksDb } from "../lib/dummy-data/tasksDb";
import { FieldId, TaskId } from "../lib/types";
import HighlightContainer from "./HighlightContainer";
import PdfViewerHeader from "./PdfViewerHeader";
import SelectionTip from "./SelectionTip";

interface PdfViewerProps {
  documentId: string;
  taskId?: TaskId;
}

const fetchHighlights = (documentId: string, taskId?: TaskId) =>
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
    fetchHighlights(documentId, taskId),
  );

  const { taskFormRef, highlightsRef } = useAnnotatorUtils();

  const addHighlight = (highlight: GhostHighlight, fieldId: FieldId) => {
    console.log("Saving highlight", highlight);
    taskFormRef.current?.setFieldValue(fieldId, highlight.content.text ?? "");
    setHighlights(
      highlights
        .filter((h) => h.id !== fieldId)
        .concat({
          ...highlight,
          comment: { text: tasksDb[taskId!].inputFields[fieldId].name },
          id: fieldId,
        }),
    );
  };

  highlightsRef.current = {
    saveHighlights: () => {
      highlights.forEach((highlight) => {
        documentsDb[documentId].tasks[taskId!].inputFields[
          highlight.id
        ].highlight = highlight;
      });
    },
  };

  useEffect(() => {
    setHighlights(fetchHighlights(documentId, taskId));
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
