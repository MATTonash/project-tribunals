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
import HighlightContainer from "./HighlightContainer";
import PdfViewerHeader from "./PdfViewerHeader";
import SelectionTip from "./SelectionTip";

interface PdfViewerProps {
  documentId: string;
  taskId?: string;
}

const PdfViewer = ({ documentId, taskId }: PdfViewerProps) => {
  const fetchHighlights = () =>
    taskId ? documentsDb[documentId].tasks[taskId].highlights : [];

  const [pdfScaleValue, setPdfScaleValue] = useState<PdfScaleValue>("auto");
  const [highlights, setHighlights] =
    useState<Array<Highlight>>(fetchHighlights());

  const { taskFormRef, highlightsRef } = useAnnotatorUtils();

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

    // console.log(taskFormRef.current.values[fieldTypeId]);

    setHighlights(
      highlights.concat({
        ...highlight,
        comment: { text: tasksDb[taskId!].fieldTypes[fieldTypeId].name },
        id: taskFormRef.current!.values[fieldTypeId][index!].fieldId,
      }),
    );
  };

  highlightsRef.current = {
    saveHighlights: () => {
      documentsDb[documentId].tasks[taskId!].highlights = highlights;
    },
  };

  useEffect(() => {
    setHighlights(fetchHighlights());
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
