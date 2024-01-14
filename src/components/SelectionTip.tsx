import { Button, Card, CardBody, CardHeader, Stack } from "@chakra-ui/react";
import { documentsDb } from "../lib/dummy-data/documentsDb";
import { tasksDb } from "../lib/dummy-data/tasksDb";
import {
  GhostHighlight,
  useSelectionUtils,
  useTipViewerUtils,
} from "react-pdf-highlighter-extended";

interface SelectionTipProps {
  documentId: string;
  taskId: string;
  addHighlight: (highlight: GhostHighlight, fieldId: string) => void;
}

const SelectionTip = ({
  documentId,
  taskId,
  addHighlight,
}: SelectionTipProps) => {
  const {
    selectionPosition,
    selectionContent,
    makeGhostHighlight,
    removeGhostHighlight,
  } = useSelectionUtils();

  const { setTip } = useTipViewerUtils();

  return (
    <Card>
      <CardHeader paddingBottom="0">
        <strong>Select an input</strong>
      </CardHeader>
      <CardBody>
        <Stack>
          {Object.entries(
            documentsDb[documentId].tasks[taskId].inputFields || {},
          ).map(([fieldId, _]) => (
            <Button
              key={fieldId}
              onClick={() => {
                makeGhostHighlight();
                window.getSelection()?.removeAllRanges();
                addHighlight(
                  { content: selectionContent, position: selectionPosition },
                  fieldId,
                );
                removeGhostHighlight();
                setTip(null);
              }}
            >
              {tasksDb[taskId].fieldTypes[fieldId].name}
            </Button>
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default SelectionTip;
