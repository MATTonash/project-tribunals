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
    <>
      <Text fontWeight={600}>Your documents</Text>
      {/* Use a flex and not ButtonGroup as ButtonGroup doesn't take up width of parent */}
      <Flex flexDirection="column">
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
              <Text>{document.name}</Text>
              <Spacer />
            </Button>
          )
        })}

        <Button
          variant="ghost"
          size="md"
          justifyContent="left"
          key={'dummyDocument'}
          leftIcon={<AiOutlineFileText />}
          as={Link}
          to={`annotator/dummyDocument`}
        >
          <Text>Dummy Document 2</Text>
          <Spacer />
        </Button>
      </Flex>
    </>
  )
}

export default DocumentList
