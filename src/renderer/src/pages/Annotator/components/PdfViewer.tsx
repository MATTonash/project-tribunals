import { Flex } from '@chakra-ui/react'
import { MouseEvent, useState } from 'react'
import {
  PdfHighlighter,
  PdfLoader,
  PdfScaleValue,
  ViewportHighlight
} from 'react-pdf-highlighter-extended'
import { useAnnotatorUtils } from '../context/AnnotatorContext'
import ContextMenu, { ContextMenuProps } from './ContextMenu'
import HighlightContainer from './HighlightContainer'
import PdfViewerHeader from './PdfViewerHeader'
import SelectionTip from './SelectionTip'

const PdfViewer = () => {
  const [pdfScaleValue, setPdfScaleValue] = useState<PdfScaleValue>('auto')
  const [contextMenu, setContextMenu] = useState<ContextMenuProps | null>(null)

  const {
    taskFormRef,
    addHighlight,
    removeHighlight,
    highlights,
    setHighlightPicker,
    pdfHighlighterUtilsRef,
    document,
    task
  } = useAnnotatorUtils()

  const handleClick = (event: MouseEvent) => {
    if (
      // @ts-ignore
      event.target.type !== 'button'
    ) {
      setHighlightPicker(null)
    }
    if (contextMenu) {
      setContextMenu(null)
    }
  }

  const handleContextMenu = (event: MouseEvent<HTMLDivElement>, highlight: ViewportHighlight) => {
    event.preventDefault()

    setContextMenu({
      xPos: event.clientX,
      yPos: event.clientY,
      removeHighlight: () => removeHighlight(highlight.id)
    })
  }

  return (
    <>
      <Flex flexDirection={'column'} flexGrow={'1'} onClick={handleClick}>
        <PdfViewerHeader pdfScaleValue={pdfScaleValue} setPdfScaleValue={setPdfScaleValue} />
        <Flex flexGrow="1" position="relative" overflowY="clip">
          <PdfLoader document={document.pdfPath}>
            {(pdfDocument) => (
              <PdfHighlighter
                pdfDocument={pdfDocument}
                pdfScaleValue={pdfScaleValue}
                highlights={highlights}
                selectionTip={task ? <SelectionTip /> : undefined}
                utilsRef={(pdfHighlighterUtils) => {
                  pdfHighlighterUtilsRef.current = pdfHighlighterUtils
                }}
              >
                <HighlightContainer onContextMenu={handleContextMenu} />
              </PdfHighlighter>
            )}
          </PdfLoader>
        </Flex>
        {contextMenu && <ContextMenu {...contextMenu} />}
      </Flex>
    </>
  )
}

export default PdfViewer
