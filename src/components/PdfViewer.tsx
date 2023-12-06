import { Flex } from "@chakra-ui/react";
import { PdfHighlighter, PdfLoader } from "react-pdf-highlighter-extended";
import PdfViewerHeader from "./PdfViewerHeader";

const PRIMARY_PDF_URL = "https://arxiv.org/pdf/2312.00001.pdf";

const HighlightContainer = () => {
  return <></>;
};

const PdfViewer = () => {
  return (
    <Flex flexDirection={"column"} flexGrow={"1"}>
      <PdfViewerHeader />
      <Flex flexGrow="1" position="relative" overflowY="clip">
        <PdfLoader document={PRIMARY_PDF_URL}>
          <PdfHighlighter highlights={[]}>
            <HighlightContainer></HighlightContainer>
          </PdfHighlighter>
        </PdfLoader>
      </Flex>
    </Flex>
  );
};

export default PdfViewer;
