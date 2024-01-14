import React from "react";
import "./ContextMenu.css";
import { Card, CardHeader, CardBody, Text, Button } from "@chakra-ui/react";
import { useAnnotatorUtils } from "../context/AnnotatorContext";

export interface ContextMenuProps {
  xPos: any;
  yPos: any;
  removeHighlight: any;
}

const ContextMenu = ({ xPos, yPos, removeHighlight }: ContextMenuProps) => {
  return (
    <div className="context-menu" style={{ top: yPos + 2, left: xPos + 2 }}>
      <Button onClick={removeHighlight}>Remove Highlight</Button>
    </div>
  );
};

export default ContextMenu;
