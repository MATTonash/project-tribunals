import { Box, Tooltip } from "@chakra-ui/react";
import React, { MouseEvent } from "react";
import {
  AreaHighlight,
  Highlight,
  MonitoredHighlightContainer,
  TextHighlight,
  Tip,
  ViewportHighlight,
  useHighlightUtils,
  useTipViewerUtils,
} from "react-pdf-highlighter-extended";
import { HighlightContext } from "react-pdf-highlighter-extended/dist/esm/contexts/HighlightContext";
import HighlightPopup from "./HighlightPopup";

interface HighlightContainerProps {}

const HighlightContainer = () => {
  const {
    highlight,
    key,
    isSelectionInProgress,
    viewportToScaled,
    screenshot,
    isScrolledTo,
    highlightBindings,
  } = useHighlightUtils();

  const { setTip, toggleEditInProgress } = useTipViewerUtils();

  const isTextHighlight = !Boolean(
    highlight.content && highlight.content.image
  );

  const component = isTextHighlight ? (
    <TextHighlight isScrolledTo={isScrolledTo} highlight={highlight} />
  ) : (
    <AreaHighlight
      isScrolledTo={isScrolledTo}
      highlight={highlight}
      onChange={() => {
        toggleEditInProgress(false);
      }}
      bounds={highlightBindings.textLayer}
      onEditStart={() => toggleEditInProgress(true)}
    />
  );

  return (
    <MonitoredHighlightContainer
      popupContent={<HighlightPopup comment={highlight.comment} />}
      onMouseOver={(popupContent) => {
        if (isSelectionInProgress()) return;

        const popupTip: Tip = {
          position: highlight.position,
          content: popupContent,
        };
        setTip(popupTip);
      }}
      onMouseOut={() => {
        setTip(null);
      }}
      key={key}
      children={component}
    />
  );
};

export default HighlightContainer;
