import { MouseEvent } from "react";
import {
  MonitoredHighlightContainer,
  TextHighlight,
  ViewportHighlight,
  useHighlightContainerContext,
} from "react-pdf-highlighter-extended";
import HighlightPopup from "./HighlightPopup";

export interface HighlightContainerProps {
  onContextMenu?: (
    event: MouseEvent<HTMLDivElement>,
    highlight: ViewportHighlight,
  ) => void;
}

const HighlightContainer = ({ onContextMenu }: HighlightContainerProps) => {
  const { highlight, isScrolledTo } = useHighlightContainerContext();

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
      highlightTip={{
        position: highlight.position,
        content: <HighlightPopup />,
      }}
      key={highlight.id}
      children={component}
    />
  );
};

export default HighlightContainer;
