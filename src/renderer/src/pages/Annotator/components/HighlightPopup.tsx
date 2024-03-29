import { ScaleFade, Tag } from "@chakra-ui/react";

const HighlightPopup = () => {
  return (
    <ScaleFade in={true} unmountOnExit={true}>
      <Tag size="lg" variant={"solid"} colorScheme="stormGray">
        (⌐■_■)
      </Tag>
    </ScaleFade>
  );
};

export default HighlightPopup;
