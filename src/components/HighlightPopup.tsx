import { ScaleFade, Tag } from "@chakra-ui/react";
import type { Comment } from "react-pdf-highlighter-extended";

interface HighlightPopupProps {
  comment: Comment;
}

const HighlightPopup = ({ comment }: HighlightPopupProps) => {
  return (
    <ScaleFade in={Boolean(comment.text)} unmountOnExit={true}>
      <Tag size="lg" variant={"solid"} colorScheme="stormGray">
        {comment.text}
      </Tag>
    </ScaleFade>
  );
};

export default HighlightPopup;
