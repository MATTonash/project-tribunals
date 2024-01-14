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
          {Object.keys(
            documentsDb[documentId].tasks[taskId].inputFields || {},
          ).map((fieldTypeId) => (
            <Button
              key={fieldTypeId}
              onClick={() => {
                makeGhostHighlight();
                window.getSelection()?.removeAllRanges();
                addHighlight(
                  { content: selectionContent, position: selectionPosition },
                  fieldTypeId,
                );
                removeGhostHighlight();
                setTip(null);
              }}
            >
              {tasksDb[taskId].fieldTypes[fieldTypeId].name}
            </Button>
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
};

export default SelectionTip;
