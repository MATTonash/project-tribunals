import { Flex } from "@chakra-ui/react";
import { MouseEvent, useEffect, useState } from "react";
import {
  GhostHighlight,
  Highlight,
  PdfHighlighter,
  PdfLoader,
  PdfScaleValue,
  ViewportHighlight,
} from "react-pdf-highlighter-extended";
import { useAnnotatorUtils } from "../context/AnnotatorContext";
import { documentsDb } from "../lib/dummy-data/documentsDb";
import { tasksDb } from "../lib/dummy-data/tasksDb";
import ContextMenu, { ContextMenuProps } from "./ContextMenu";
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
  const [contextMenu, setContextMenu] = useState<ContextMenuProps | null>(null);
  const [highlights, setHighlights] =
    useState<Array<Highlight>>(fetchHighlights());

  const { taskFormRef, highlightsRef } = useAnnotatorUtils();

  const handleClick = (event: MouseEvent) => {
    // @ts-ignore
    if (event.target.type !== "button") {
      highlightsRef.current!.setHighlightPicker(null);
    }
    if (contextMenu) {
      setContextMenu(null);
    }
  };

  const handleContextMenu = (
    event: MouseEvent<HTMLDivElement>,
    highlight: ViewportHighlight,
  ) => {
    event.preventDefault();

    setContextMenu({
      xPos: event.clientX,
      yPos: event.clientY,
      removeHighlight: () => {
        highlightsRef.current?.removeHighlight(highlight.id);
      },
    });
  };

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

    setHighlights(
      highlights.concat({
        ...highlight,
        comment: { text: tasksDb[taskId!].fieldTypes[fieldTypeId].name },
        id: taskFormRef.current!.values[fieldTypeId][index!].fieldId,
      }),
    );
  };

  const removeHighlight = (fieldId: string) => {
    setHighlights(highlights.filter((highlight) => highlight.id != fieldId));
  };

  // @ts-ignore
  highlightsRef.current = {
    ...highlightsRef.current,
    saveHighlights: () => {
      documentsDb[documentId].tasks[taskId!].highlights = highlights;
    },
    removeHighlight,
  };

  useEffect(() => {
    setHighlights(fetchHighlights());
    highlightsRef.current?.removeGhostHighlight &&
      highlightsRef.current?.removeGhostHighlight();
  }, [documentId, taskId]);

  return (
    <>
      <Flex flexDirection={"column"} flexGrow={"1"} onClick={handleClick}>
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
              <HighlightContainer onContextMenu={handleContextMenu} />
            </PdfHighlighter>
          </PdfLoader>
        </Flex>
        {contextMenu && <ContextMenu {...contextMenu} />}
      </Flex>
    </>
  );
};

export default PdfViewer;
