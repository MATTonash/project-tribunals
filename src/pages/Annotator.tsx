import { Flex, Grid, GridItem, Spinner } from "@chakra-ui/react";
import TaskItem from "../components/TaskItem";
import Task from "../lib/Task";

import examplePDF from "../assets/example.pdf";
import {
  AreaHighlight,
  Highlight,
  NewHighlight,
  PdfHighlighter,
  PdfLoader,
  Popup,
  Tip,
} from "react-pdf-highlighter";
import { useState, useEffect } from "react";

const HighlightPopup = ({
  comment,
}: {
  comment: { text: string; emoji: string };
}) =>
  comment.text ? (
    <div className="Highlight__popup">
      {comment.emoji} {comment.text}
    </div>
  ) : null;

const PRIMARY_PDF_URL = "https://arxiv.org/pdf/1708.08021.pdf";
const SECONDARY_PDF_URL = "https://arxiv.org/pdf/1604.02480.pdf";

const searchParams = new URLSearchParams(document.location.search);

const initialUrl = searchParams.get("url") || PRIMARY_PDF_URL;

const Annotator = () => {
  const [url, setUrl] = useState(initialUrl);

  const test_highlight: NewHighlight = {
    content: {
      text: " Type Checking for JavaScript",
    },
    position: {
      boundingRect: {
        x1: 255.73419189453125,
        y1: 139.140625,
        x2: 574.372314453125,
        y2: 165.140625,
        width: 809.9999999999999,
        height: 1200,
      },
      rects: [
        {
          x1: 255.73419189453125,
          y1: 139.140625,
          x2: 574.372314453125,
          y2: 165.140625,
          width: 809.9999999999999,
          height: 1200,
        },
      ],
      pageNumber: 1,
    },
    comment: {
      text: "Flow or TypeScript? lorum ",
      emoji: "🔥",
    },
    id: "8245652131754351",
  };

  const [highlights, setHighlights] = useState([test_highlight]);

  return (
    <Flex height="100vh">
      <PdfLoader url={url} beforeLoad={<Spinner />}>
        {(pdfDocument) => (
          <PdfHighlighter
            pdfDocument={pdfDocument}
            enableAreaSelection={(event) => event.altKey}
            onSelectionFinished={(
              position,
              content,
              hideTipAndSelection,
              transformSelection
            ) => (
              <Tip
                onOpen={transformSelection}
                onConfirm={(comment) => {
                  hideTipAndSelection();
                }}
              />
            )}
            highlightTransform={(
              highlight,
              index,
              setTip,
              hideTip,
              viewportToScaled,
              screenshot,
              isScrolledTo
            ) => {
              const isTextHighlight = !Boolean(highlight.content);

              const component = isTextHighlight ? (
                <Highlight
                  isScrolledTo={isScrolledTo}
                  position={highlight.position}
                  comment={highlight.comment}
                />
              ) : (
                <AreaHighlight
                  isScrolledTo={isScrolledTo}
                  highlight={highlight}
                  onChange={(boundingRect) => {}}
                />
              );

              return (
                <Popup
                  popupContent={<HighlightPopup {...highlight} />}
                  onMouseOver={(popupContent) =>
                    setTip(highlight, (highlight) => popupContent)
                  }
                  onMouseOut={hideTip}
                  key={index}
                  children={component}
                />
              );
            }}
            highlights={highlights}
          />
        )}
      </PdfLoader>
    </Flex>
  );
};

export default Annotator;
