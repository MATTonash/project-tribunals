import { Flex, Heading, IconButton, Spacer } from '@chakra-ui/react'
import { IoArrowBackCircleOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { useAnnotatorUtils } from '../context/AnnotatorContext'

const TaskFormHeader = () => {
  const { document, task } = useAnnotatorUtils()

  return (
    <Flex
      h={'36px'}
      gap={2}
      px={4}
      alignItems={'center'}
      borderBottom="1px"
      borderBottomColor="stoneGray.200"
    >
      <Heading as="h2" size="md">
        <b>{task?.name}</b>
      </Heading>
      <Spacer />
      <IconButton
        aria-label="Return to Task List"
        icon={<IoArrowBackCircleOutline />}
        size={'sm'}
        fontSize={'22'}
        variant="ghost"
        as={Link}
        to={`../annotator/${document._id}`}
      />
    </Flex>
  )
}

export default TaskFormHeader
