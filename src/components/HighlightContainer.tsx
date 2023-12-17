import {
  AreaHighlight,
  MonitoredHighlightContainer,
  TextHighlight,
  Tip,
  useHighlightUtils,
  useTipViewerUtils,
} from "react-pdf-highlighter-extended";
import HighlightPopup from "./HighlightPopup";

const HighlightContainer = () => {
  const {
    highlight,
    key,
    isSelectionInProgress,
    isScrolledTo,
    highlightBindings,
  } = useHighlightUtils();

  const { setTip, toggleEditInProgress } = useTipViewerUtils();

  const isTextHighlight = !Boolean(
    highlight.content && highlight.content.image,
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
