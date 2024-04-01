import { Button, Card, CardBody, CardHeader, Stack } from '@chakra-ui/react'
import { usePdfHighlighterContext } from 'react-pdf-highlighter-extended'
import { useAnnotatorUtils } from '../context/AnnotatorContext'

const SelectionTip = () => {
  const { getCurrentSelection, removeGhostHighlight, setTip } = usePdfHighlighterContext()

  const { setHighlightPicker, task, addHighlight } = useAnnotatorUtils()

  return (
    <Card className="selectionTip">
      <CardHeader paddingBottom="0">
        <strong>Select an input</strong>
      </CardHeader>
      <CardBody>
        <Stack>
          {Object.keys(task!.fieldTypes || {}).map((fieldTypeId) => (
            <Button
              key={fieldTypeId}
              onClick={(event) => {
                const ghostHighlight = getCurrentSelection()!.makeGhostHighlight()
                if (event.altKey) {
                  setHighlightPicker(fieldTypeId)
                } else {
                  addHighlight(
                    {
                      content: ghostHighlight!.content,
                      position: ghostHighlight!.position
                    },
                    fieldTypeId
                  )
                  removeGhostHighlight()
                }
                setTip(null)
              }}
            >
              {task!.fieldTypes[fieldTypeId].name}
            </Button>
          ))}
        </Stack>
      </CardBody>
    </Card>
  )
}

export default SelectionTip
