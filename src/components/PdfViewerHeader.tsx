import { Flex } from "@chakra-ui/layout";
import {
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  ToastId,
  useToast,
} from "@chakra-ui/react";
import { useRef } from "react";

import { CiZoomIn, CiZoomOut } from "react-icons/ci";
import { IoChevronDown } from "react-icons/io5";
import { MdOutlineManageSearch } from "react-icons/md";
import { PiSquaresFour } from "react-icons/pi";
import { PdfScaleValue } from "react-pdf-highlighter-extended";

interface PdfViewerHeaderProps {
  pdfScaleValue: PdfScaleValue;
  setPdfScaleValue: (scale: PdfScaleValue) => void;
}

const PdfViewerHeader = ({
  pdfScaleValue,
  setPdfScaleValue,
}: PdfViewerHeaderProps) => {
  const toast = useToast();
  const toastIdRef = useRef<ToastId | null>(null);

  return (
    <Flex
      h={"36px"}
      px={4}
      alignItems={"center"}
      borderBottom="1px"
      borderBottomColor="stoneGray.200"
    >
      <IconButton
        aria-label="Search document"
        icon={<MdOutlineManageSearch />}
        size={"sm"}
        fontSize={"22"}
        variant="ghost"
        onClick={() => {
          toastIdRef.current = toast({
            title: "Not implemented yet, sorry :(",
            position: "top",
            status: "error",
            isClosable: true,
          });
        }}
      />
      <IconButton
        aria-label="Navigate document"
        icon={<PiSquaresFour />}
        size={"sm"}
        fontSize={"22"}
        variant="ghost"
        onClick={() => {
          toastIdRef.current = toast({
            title: "Not implemented yet, sorry :(",
            position: "top",
            status: "error",
            isClosable: true,
          });
        }}
      />
      <IconButton
        aria-label="Zoom in"
        icon={<CiZoomIn />}
        size={"sm"}
        fontSize={"22"}
        variant="ghost"
        onClick={() => {
          if (typeof pdfScaleValue === "number") {
            setPdfScaleValue(Math.min(pdfScaleValue + 0.1, 6));
          } else {
            setPdfScaleValue(1);
          }
        }}
      />
      <IconButton
        aria-label="Zoom out"
        icon={<CiZoomOut />}
        size={"sm"}
        fontSize={"22"}
        variant="ghost"
        onClick={() => {
          if (typeof pdfScaleValue === "number") {
            setPdfScaleValue(Math.max(pdfScaleValue - 0.1, 0.1));
          } else {
            setPdfScaleValue(1);
          }
        }}
      />
      <Menu>
        <MenuButton
          as={Button}
          size={"sm"}
          variant={"ghost"}
          rightIcon={<IoChevronDown />}
        >
          {pdfScaleValue === "auto"
            ? "Automatic Zoom"
            : pdfScaleValue === "page-actual"
              ? "Actual Size"
              : pdfScaleValue === "page-fit"
                ? "Page Fit"
                : pdfScaleValue === "page-width"
                  ? "Page Width"
                  : pdfScaleValue === "page-height"
                    ? "Page Height"
                    : (pdfScaleValue * 100).toFixed(0) + "%"}
        </MenuButton>
        {/** PdfViewer has severl layers making a document. z0 = page, z1 = text, z2 = annotation, z3 = annotation editor*/}
        <MenuList zIndex={"4"}>
          <MenuItem onClick={() => setPdfScaleValue("auto")}>
            Automatic Zoom
          </MenuItem>
          <MenuItem onClick={() => setPdfScaleValue("page-actual")}>
            Actual Size
          </MenuItem>
          <MenuItem onClick={() => setPdfScaleValue("page-fit")}>
            Page Fit
          </MenuItem>
          <MenuItem onClick={() => setPdfScaleValue("page-width")}>
            Page Width
          </MenuItem>
          <MenuItem onClick={() => setPdfScaleValue("page-height")}>
            Page Height
          </MenuItem>
          <MenuDivider />
          <MenuItem onClick={() => setPdfScaleValue(0.5)}>50%</MenuItem>
          <MenuItem onClick={() => setPdfScaleValue(0.75)}>75%</MenuItem>
          <MenuItem onClick={() => setPdfScaleValue(1)}>100%</MenuItem>
          <MenuItem onClick={() => setPdfScaleValue(1.25)}>125%</MenuItem>
          <MenuItem onClick={() => setPdfScaleValue(1.5)}>150%</MenuItem>
          <MenuItem onClick={() => setPdfScaleValue(2)}>200%</MenuItem>
          <MenuItem onClick={() => setPdfScaleValue(3)}>300%</MenuItem>
          <MenuItem onClick={() => setPdfScaleValue(4)}>400%</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default PdfViewerHeader;
