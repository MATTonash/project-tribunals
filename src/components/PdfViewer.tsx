import { Flex } from "@chakra-ui/react";
import { PdfHighlighter, PdfLoader } from "react-pdf-highlighter-extended";

const PRIMARY_PDF_URL = "https://arxiv.org/pdf/2312.00001.pdf";

const HighlightContainer = () => {
  return <></>;
};

const PdfViewer = () => {
  return (
    <Flex flexGrow="1" position="relative" overflowY="clip">
      <PdfLoader document={PRIMARY_PDF_URL}>
        <PdfHighlighter highlights={[]}>
          <HighlightContainer></HighlightContainer>
        </PdfHighlighter>
      </PdfLoader>
    </Flex>
  );
};

export default PdfViewer;
