import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import {
  PdfHighlighter,
  PdfLoader,
  PdfScaleValue,
} from "react-pdf-highlighter-extended";
import PdfViewerHeader from "./PdfViewerHeader";

const PRIMARY_PDF_URL = "https://arxiv.org/pdf/2312.00001.pdf";

const HighlightContainer = () => {
  return <></>;
};

const PdfViewer = () => {
  const [pdfScaleValue, setPdfScaleValue] = useState<PdfScaleValue>("auto");

  return (
    <Flex flexDirection={"column"} flexGrow={"1"}>
      <PdfViewerHeader
        pdfScaleValue={pdfScaleValue}
        setPdfScaleValue={setPdfScaleValue}
      />
      <Flex flexGrow="1" position="relative" overflowY="clip">
        <PdfLoader document={PRIMARY_PDF_URL}>
          <PdfHighlighter pdfScaleValue={pdfScaleValue} highlights={[]}>
            <HighlightContainer></HighlightContainer>
          </PdfHighlighter>
        </PdfLoader>
      </Flex>
    </Flex>
  );
};

export default PdfViewer;
