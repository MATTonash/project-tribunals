import { Flex } from "@chakra-ui/layout";
import {
  Button,
  Heading,
  IconButton,
  Spacer,
  ToastId,
  useToast,
} from "@chakra-ui/react";
import { useRef } from "react";

import { CiZoomIn, CiZoomOut } from "react-icons/ci";
import { MdOutlineManageSearch } from "react-icons/md";
import { PiSquaresFour } from "react-icons/pi";

interface PdfViewerHeaderProps {}

const PdfViewerHeader = ({}: PdfViewerHeaderProps) => {
  const toast = useToast();
  const toastIdRef = useRef<ToastId | null>(null);

  return (
    <Flex
      h={8}
      px={4}
      alignItems={"center"}
      borderBottom="1px"
      borderBottomColor="stoneGray.200"
    >
      <IconButton
        aria-label="Search document"
        icon={<MdOutlineManageSearch />}
        colorScheme="stormGray"
        variant="naked"
        onClick={() => {}}
      />
      <IconButton
        aria-label="Navigate document"
        icon={<PiSquaresFour />}
        colorScheme="stormGray"
        variant="naked"
        onClick={() => {}}
      />
      <IconButton
        aria-label="Zoom in"
        icon={<CiZoomIn />}
        colorScheme="stormGray"
        variant="naked"
        onClick={() => {}}
      />
      <IconButton
        aria-label="Zoom out"
        icon={<CiZoomOut />}
        colorScheme="stormGray"
        variant="naked"
        onClick={() => {}}
      />
      <Spacer />
      <Button
        size={"xs"}
        onClick={() => {
          toastIdRef.current = toast({
            title: "Saved!",
            position: "bottom-right",
            status: "success",
            duration: 1000,
            isClosable: true,
          });
        }}
      >
        Save
      </Button>
    </Flex>
  );
};

export default PdfViewerHeader;
