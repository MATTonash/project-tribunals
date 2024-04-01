import { Divider, Flex } from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";

interface ResizableSidebarProps {
  minWidth?: string | number;
  maxWidth?: string | number;
  children?: ReactNode;
}

const ResizableSidebar = ({
  minWidth = "400px",
  maxWidth = "70%",
  children,
}: ResizableSidebarProps) => {
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(0);

  const handleMouseDown = () => {
    setIsResizing(true);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (isResizing) {
      setSidebarWidth(event.clientX);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <Flex
      width={sidebarWidth}
      minHeight="100%"
      minWidth={minWidth}
      maxWidth={maxWidth}
      overflowY={"auto"}
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        WebkitOverflowScrolling: "touch",
      }}
      css={{ "&::-webkit-scrollbar": { display: "none" } }}
    >
      <Flex minWidth={"calc(100% - 10px)"} flexDirection="column">
        {children}
      </Flex>
      <Divider
        orientation="vertical"
        cursor="ew-resize"
        onMouseDown={handleMouseDown}
        borderWidth="5px"
        height="auto"
        opacity={1}
        borderColor={isResizing ? "stoneGray.900" : "stoneGray.200"}
      />
    </Flex>
  );
};

export default ResizableSidebar;
