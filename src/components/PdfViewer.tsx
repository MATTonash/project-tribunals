// import { Button, Container, Flex, Spacer, Text } from "@chakra-ui/react";
// import { useForceUpdate } from "framer-motion";
// import { useState } from "react";
// import { PdfHighlighter, PdfLoader } from "react-pdf-highlighter";

// const PRIMARY_PDF_URL = "https://arxiv.org/pdf/1708.08021.pdf";

// const HighlightPopup = () => {
//   <div>Highlight Popup!</div>;
// };

// const PdfViewer = () => {
//   const [url, setUrl] = useState(PRIMARY_PDF_URL);
//   const [highlights, setHighlights] = useState([]);
//   const [scaleValue, setScaleValue] = useState("1");

//   return (
//     <Flex
//       position="relative"
//       width="100%"
//       flexDirection="column"
//       bgColor="stormGray.600"
//       overflowY="clip"
//     >
//       <Flex height="40px" bgColor="white">
//         <Button
//           onClick={(event) => {
//             setScaleValue("2");
//           }}
//         >
//           Change Zoom!
//         </Button>
//       </Flex>
//       <PdfLoader url={url} beforeLoad={<div>Loading!</div>}>
//         {(pdfDocument) => (
//           <PdfHighlighter
//             pdfDocument={pdfDocument}
//             enableAreaSelection={(event) => event.altKey}
//             onScrollChange={() => {}}
//             scrollRef={(scrollTo) => {}}
//             onSelectionFinished={(
//               position,
//               content,
//               hideTipAndSelection,
//               transformSelection
//             ) => <div>Selection finished!</div>}
//             highlightTransform={(
//               highlight,
//               index,
//               setTip,
//               hideTip,
//               viewportToScaled,
//               screenshot,
//               isScrolledTo
//             ) => <div>highlight transform!</div>}
//             highlights={highlights}
//             pdfScaleValue={scaleValue}
//           />
//         )}
//       </PdfLoader>
//     </Flex>
//   );
// };

// export default PdfViewer;
