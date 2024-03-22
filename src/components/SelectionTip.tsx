import { Button, Card, CardBody, CardHeader, Stack } from "@chakra-ui/react";
import {
  GhostHighlight,
  usePdfHighlighterContext,
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
  const { getCurrentSelection, removeGhostHighlight, setTip } =
    usePdfHighlighterContext();

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
                const ghostHighlight =
                  getCurrentSelection()!.makeGhostHighlight();
                if (event.altKey) {
                  // window.getSelection()?.removeAllRanges();
                  highlightsRef.current?.setHighlightPicker(fieldTypeId);
                  highlightsRef.current!.removeGhostHighlight =
                    removeGhostHighlight;
                  highlightsRef.current!.addGhostHighlight = (index) => {
                    addHighlight(
                      {
                        content: ghostHighlight!.content,
                        position: ghostHighlight!.position,
                      },
                      fieldTypeId,
                      index,
                    );
                    removeGhostHighlight();
                  };
                } else {
                  // window.getSelection()?.removeAllRanges();
                  addHighlight(
                    {
                      content: ghostHighlight!.content,
                      position: ghostHighlight!.position,
                    },
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
