import { Flex } from "@chakra-ui/react";
import { PdfHighlighter, PdfLoader } from "react-pdf-highlighter-extended";

const PRIMARY_PDF_URL = "https://arxiv.org/pdf/1708.08021.pdf";

const HighlightContainer = () => {
  return <></>;
};

const PdfViewer = () => {
  return (
    <Flex
      position="relative"
      width="100%"
      flexDirection="column"
      overflowY="clip"
    >
      <PdfLoader document={PRIMARY_PDF_URL}>
        <PdfHighlighter highlights={[]}>
          <HighlightContainer></HighlightContainer>
        </PdfHighlighter>
      </PdfLoader>
    </Flex>
  );
};

export default PdfViewer;
