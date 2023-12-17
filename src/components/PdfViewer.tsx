import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import {
  GhostHighlight,
  Highlight,
  PdfHighlighter,
  PdfLoader,
  PdfScaleValue,
} from "react-pdf-highlighter-extended";
import PdfViewerHeader from "./PdfViewerHeader";
import { documentsDb } from "../lib/dummy-data/documentsDb";
import SelectionTip  from "./SelectionTip";
import { FieldId, Task, TaskId } from "../lib/types";
import HighlightContainer from "./HighlightContainer";
import { tasksDb } from "../lib/dummy-data/tasksDb";

interface PdfViewerProps {
  documentId: string;
  taskId?: TaskId;
}

const getHighlights = (documentId: string, taskId?: TaskId) => taskId ? Object.values(
  documentsDb[documentId].tasks[taskId].inputFields || {}
).flatMap((inputField) =>
  inputField.highlight ? [inputField.highlight] : []
) : [];

const PdfViewer = ({ documentId, taskId }: PdfViewerProps) => {
  const [pdfScaleValue, setPdfScaleValue] = useState<PdfScaleValue>("auto");
  const [highlights, setHighlights] = useState<Array<Highlight>>(getHighlights(documentId, taskId))

  const addHighlight = (highlight: GhostHighlight, fieldId: FieldId) => {
    console.log("Saving highlight", highlight);
    documentsDb[documentId].tasks[taskId!].inputFields[fieldId].input = highlight.content.text;
    documentsDb[documentId].tasks[taskId!].inputFields[fieldId].highlight  = {...highlight, comment: {text: tasksDb[taskId!].inputFields[fieldId].name}, id: fieldId}
    
    setHighlights(getHighlights(documentId, taskId));
  };

  useEffect(() => {
    setHighlights(getHighlights(documentId, taskId));
  }, [documentId, taskId])

  return (
    <Flex flexDirection={"column"} flexGrow={"1"}>
      <PdfViewerHeader
        pdfScaleValue={pdfScaleValue}
        setPdfScaleValue={setPdfScaleValue}
      />
      <Flex flexGrow="1" position="relative" overflowY="clip">
        <PdfLoader document={documentsDb[documentId].url}>
          <PdfHighlighter pdfScaleValue={pdfScaleValue} highlights={highlights} selectionTip={taskId && <SelectionTip documentId={documentId} taskId={taskId} addHighlight={addHighlight} />}>
            <HighlightContainer></HighlightContainer>
          </PdfHighlighter>
        </PdfLoader>
      </Flex>
    </Flex>
  );
};

export default PdfViewer;
