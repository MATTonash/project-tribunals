import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import {
  Highlight,
  PdfHighlighter,
  PdfLoader,
  PdfScaleValue,
} from "react-pdf-highlighter-extended";
import PdfViewerHeader from "./PdfViewerHeader";
import { documentsDb } from "../lib/dummy-data/documentsDb";
import { InputSelector } from "./InputSelector";
import { TaskId } from "../lib/types";
import HighlightContainer from "./HighlightContainer";

interface PdfViewerProps {
  documentId: string;
  taskId: TaskId | undefined;
}

const PdfViewer = ({ documentId, taskId }: PdfViewerProps) => {
  const [pdfScaleValue, setPdfScaleValue] = useState<PdfScaleValue>("auto");

  const highlights = taskId
    ? Object.values(
        documentsDb[documentId].tasks[taskId].inputFields || {}
      ).flatMap((inputField) =>
        inputField.highlight ? [inputField.highlight] : []
      )
    : [];

  console.log(highlights);

  return (
    <Flex flexDirection={"column"} flexGrow={"1"}>
      <PdfViewerHeader
        pdfScaleValue={pdfScaleValue}
        setPdfScaleValue={setPdfScaleValue}
      />
      <Flex flexGrow="1" position="relative" overflowY="clip">
        <PdfLoader document={documentsDb[documentId].url}>
          <PdfHighlighter pdfScaleValue={pdfScaleValue} highlights={highlights} selectionTip={<InputSelector />}>
            <HighlightContainer></HighlightContainer>
          </PdfHighlighter>
        </PdfLoader>
      </Flex>
    </Flex>
  );
};

export default PdfViewer;
