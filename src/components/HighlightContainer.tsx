import {
  AreaHighlight,
  MonitoredHighlightContainer,
  TextHighlight,
  Tip,
  ViewportHighlight,
  useHighlightUtils,
  useTipViewerUtils,
} from "react-pdf-highlighter-extended";
import HighlightPopup from "./HighlightPopup";
import { MouseEvent } from "react";

export interface HighlightContainerProps {
  onContextMenu?: (
    event: MouseEvent<HTMLDivElement>,
    highlight: ViewportHighlight,
  ) => void;
}

const HighlightContainer = ({ onContextMenu }: HighlightContainerProps) => {
  const {
    highlight,
    key,
    isSelectionInProgress,
    isScrolledTo,
    highlightBindings,
  } = useHighlightUtils();

  const { setTip, toggleEditInProgress } = useTipViewerUtils();

  const component = (
    <TextHighlight
      isScrolledTo={isScrolledTo}
      highlight={highlight}
      onContextMenu={(event) =>
        onContextMenu && onContextMenu(event, highlight)
      }
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
