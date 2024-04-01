import { Button, Flex, Spacer, Text } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { AiOutlineFileText } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { AnnotatedDocument, RevTag } from '../../../../../common/types'

const DocumentList = () => {
  const [documents, setDocuments] = useState<AnnotatedDocument[]>([])

  useEffect(() => {
    const documentPromises: Promise<(AnnotatedDocument & RevTag)[]> = window.ipc.getAllDocuments()

    documentPromises.then((values: (AnnotatedDocument & RevTag)[]) => {
      setDocuments(values)
    })
  }, [])

  return (
    <Flex flexDirection="column">
      {/* Use a flex and not ButtonGroup as ButtonGroup doesn't take up width of parent */}
      {documents.map((document) => {
        return (
          <Button
            variant="ghost"
            size="md"
            justifyContent="left"
            key={document._id}
            leftIcon={<AiOutlineFileText />}
            as={Link}
            to={`annotator/${document._id}`}
          >
            <Text opacity={0.9}>{document.name}</Text>
            <Spacer />
            <Text opacity={0.9}>{document.editedDate.toString().slice(0, 10)}</Text>
          </Button>
        )
      })}
    </Flex>
  )
}

export default DocumentList
