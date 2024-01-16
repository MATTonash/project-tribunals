import { Button, Card, CardBody, CardHeader, Stack } from "@chakra-ui/react";
import {
  GhostHighlight,
  useSelectionUtils,
  useTipViewerUtils,
} from "react-pdf-highlighter-extended";
import { useAnnotatorUtils } from "../context/AnnotatorContext";
import { documentsDb } from "../lib/dummy-data/documentsDb";
import { tasksDb } from "../lib/dummy-data/tasksDb";

interface SelectionTipProps {
  documentId: string;
  taskId: string;
  addHighlight: (
    highlight: GhostHighlight,
    fieldId: string,
    index?: number,
  ) => void;
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
  const { highlightsRef } = useAnnotatorUtils();

  return (
    <Card className="selectionTip">
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
              onClick={(event) => {
                if (event.altKey) {
                  makeGhostHighlight();
                  window.getSelection()?.removeAllRanges();
                  highlightsRef.current?.setHighlightPicker(fieldTypeId);
                  highlightsRef.current!.removeGhostHighlight =
                    removeGhostHighlight;
                  highlightsRef.current!.addGhostHighlight = (index) => {
                    addHighlight(
                      {
                        content: selectionContent,
                        position: selectionPosition,
                      },
                      fieldTypeId,
                      index,
                    );
                    removeGhostHighlight();
                  };
                } else {
                  makeGhostHighlight();
                  window.getSelection()?.removeAllRanges();
                  addHighlight(
                    { content: selectionContent, position: selectionPosition },
                    fieldTypeId,
                  );
                  removeGhostHighlight();
                }
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
