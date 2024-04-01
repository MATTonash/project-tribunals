import { MouseEvent } from 'react'
import {
  MonitoredHighlightContainer,
  TextHighlight,
  ViewportHighlight,
  useHighlightContainerContext
} from 'react-pdf-highlighter-extended'
import { ScaleFade, Tag } from '@chakra-ui/react'
import { TaskHighlight } from 'src/common/types'

export interface HighlightContainerProps {
  onContextMenu?: (event: MouseEvent<HTMLDivElement>, highlight: ViewportHighlight) => void
}

const HighlightContainer = ({ onContextMenu }: HighlightContainerProps) => {
  const { highlight, isScrolledTo } = useHighlightContainerContext()

  const component = (
    <TextHighlight
      isScrolledTo={isScrolledTo}
      highlight={highlight}
      onContextMenu={(event) => onContextMenu && onContextMenu(event, highlight)}
    />
  )

  return (
    <MonitoredHighlightContainer
      highlightTip={{
        position: highlight.position,
        content: (
          <ScaleFade in={true} unmountOnExit={true}>
            <Tag size="lg" variant={'solid'} colorScheme="stormGray">
              {(highlight as ViewportHighlight<TaskHighlight>).fieldTypeName}
            </Tag>
          </ScaleFade>
        )
      }}
      key={highlight.id}
      children={component}
    />
  )
}

export default HighlightContainer
