import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import {
  PdfHighlighter,
  PdfLoader,
  PdfScaleValue,
} from "react-pdf-highlighter-extended";
import PdfViewerHeader from "./PdfViewerHeader";
import { documentsDb } from "../lib/dummy-data/documentsDb";

const HighlightContainer = () => {
  return <></>;
};

interface PdfViewerProps {
  documentId: string;
}

const PdfViewer = ({ documentId }: PdfViewerProps) => {
  const [pdfScaleValue, setPdfScaleValue] = useState<PdfScaleValue>("auto");

  return (
    <Flex flexDirection={"column"} flexGrow={"1"}>
      <PdfViewerHeader
        pdfScaleValue={pdfScaleValue}
        setPdfScaleValue={setPdfScaleValue}
      />
      <Flex flexGrow="1" position="relative" overflowY="clip">
        <PdfLoader document={documentsDb[documentId].url}>
          <PdfHighlighter pdfScaleValue={pdfScaleValue} highlights={[]}>
            <HighlightContainer></HighlightContainer>
          </PdfHighlighter>
        </PdfLoader>
      </Flex>
    </Flex>
  );
};

export default PdfViewer;
