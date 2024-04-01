import { Button, Card, CardBody, CardHeader } from "@chakra-ui/react";

export interface ContextMenuProps {
  xPos: any;
  yPos: any;
  removeHighlight: any;
}

const ContextMenu = ({ xPos, yPos, removeHighlight }: ContextMenuProps) => {
  return (
    <Card
      style={{
        position: "absolute",
        zIndex: 1000,
        top: yPos + 2,
        left: xPos + 2,
      }}
    >
      <CardHeader paddingBottom="0">
        <strong>Select an input</strong>
      </CardHeader>
      <CardBody>
        <Button onClick={removeHighlight}>Remove Highlight</Button>
      </CardBody>
    </Card>
  );
};

export default ContextMenu;
