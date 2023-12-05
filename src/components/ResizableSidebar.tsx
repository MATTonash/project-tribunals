import { Divider, Flex } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

const ResizableSidebar = () => {
  const [isResizing, setIsResizing] = useState(false);
  const [sidebarWidth, setSidebarWidth] = useState(0);

  const dividerRef = useRef<HTMLHRElement | null>(null);

  const handleMouseDown = () => {
    setIsResizing(true);
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

  const handleMouseMove = (event: MouseEvent) => {
    console.log("handleMouseMove");
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
      minWidth="400px"
      maxWidth={"70%"}
      //   padding={"4"}
      backgroundColor="blue.500"
    >
      <Flex minWidth={"calc(100% - 20px)"}>
        <div>hello</div>
      </Flex>
      <Divider
        ref={dividerRef}
        orientation="vertical"
        cursor="ew-resize"
        onMouseDown={handleMouseDown}
        borderWidth="10px"
        height="auto"
      />
    </Flex>
  );
};

export default ResizableSidebar;
