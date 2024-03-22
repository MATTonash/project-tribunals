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
  const [pdfScaleValue, setPdfScaleValue] = useState<PdfScaleValue>("auto");
  const [contextMenu, setContextMenu] = useState<ContextMenuProps | null>(null);

  const {
    taskFormRef,
    addHighlight,
    removeHighlight,
    highlights,
    setHighlightPicker,
    pdfHighlighterUtilsRef,
  } = useAnnotatorUtils();

  const handleClick = (event: MouseEvent) => {
    if (
      // @ts-ignore
      event.target.type !== "button"
    ) {
      setHighlightPicker(null);
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
      removeHighlight: () => removeHighlight(highlight.id),
    });
  };

  return (
    <>
      <Flex flexDirection={"column"} flexGrow={"1"} onClick={handleClick}>
        <PdfViewerHeader
          pdfScaleValue={pdfScaleValue}
          setPdfScaleValue={setPdfScaleValue}
        />
        <Flex flexGrow="1" position="relative" overflowY="clip">
          <PdfLoader document={documentsDb[documentId].url}>
            {(pdfDocument) => (
              <PdfHighlighter
                pdfDocument={pdfDocument}
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
                utilsRef={(pdfHighlighterUtils) => {
                  pdfHighlighterUtilsRef.current = pdfHighlighterUtils;
                }}
              >
                <HighlightContainer onContextMenu={handleContextMenu} />
              </PdfHighlighter>
            )}
          </PdfLoader>
        </Flex>
        {contextMenu && <ContextMenu {...contextMenu} />}
      </Flex>
    </>
  );
};

export default PdfViewer;
