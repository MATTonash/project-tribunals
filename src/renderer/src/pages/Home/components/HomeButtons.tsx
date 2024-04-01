import { Flex, Button } from '@chakra-ui/react'
import { AiOutlineFileAdd, AiOutlineFolderOpen, AiOutlineLink } from 'react-icons/ai'

const HomeButtons = () => {
  return (
    <Flex flexDirection="column" gap={3}>
      <Button size="xl" colorScheme="salmon" leftIcon={<AiOutlineFileAdd fontSize={22} />}>
        Create a document from a PDF
      </Button>
      <Button size="xl" variant="outline" leftIcon={<AiOutlineFolderOpen fontSize={22} />}>
        Add a document from your hard drive
      </Button>
      <Button size="xl" variant="outline" width={'100%'} leftIcon={<AiOutlineLink fontSize={22} />}>
        Import a document with a link
      </Button>
    </Flex>
  )
}

export default HomeButtons
