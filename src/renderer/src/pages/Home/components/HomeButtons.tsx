import { Flex, Button } from '@chakra-ui/react'
import { AiOutlineFileAdd, AiOutlineFolderOpen, AiOutlineLink } from 'react-icons/ai'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { Formik, Field } from 'formik'

import {
  Box,
  Checkbox,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  VStack
} from '@chakra-ui/react'

import SelectTasks from './SelectTasks'
import { AnnotatedDocument } from 'src/common/types'
import TaskCard from '@renderer/components/TaskCard'

const HomeButtons = () => {
  

  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
   
    <Flex flexDirection="column" gap={3}>
      <TaskCard></TaskCard>
      <Button
        size="xl"
        colorScheme="salmon"
        leftIcon={<AiOutlineFileAdd fontSize={36} />}
        onClick={onOpen}
      >
        Create a document from a PDF...
      </Button>
      <Modal 
      isOpen={isOpen} 
      onClose={onClose}
      size={'xl'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Document Creator</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Formik
              initialValues={{
                docname: '',
                id: (Math.floor(100000000*Math.random())),
                document: '',
                tasks: []
              }}
              onSubmit={(values) => {
                alert(JSON.stringify(values, null, 2))
                
                const annotatedDoc:AnnotatedDocument = {
                  _id: values.id.toString(),
                  pdfPath: values.document,
                  name: values.docname,
                }

                window.ipc.putAnnotatedDocument(annotatedDoc)
                window.ipc.putTask(values.tasks)
              }}
            >
              {({ handleSubmit, errors, touched }) => (
                <form onSubmit={handleSubmit}>

                  <VStack spacing={4} align="flex-start">
                    <FormControl>
                      <FormLabel htmlFor="docname">Document Name</FormLabel>
                      <Field as={Input} id="docname" name="docname" variant="filled" />
                    </FormControl>

                    <FormControl>
                      <FormLabel htmlFor="id">ID</FormLabel>
                      <Field as={Input} id="id" name="id" variant="filled"/>
                    </FormControl>

                    <FormControl>
                      <FormLabel htmlFor="document">Document Path</FormLabel>
                      <Flex direction={'row'} gap={'2'}>
                        {/* <Field as={Input} id="document" name="document" type="document" variant="filled" /> */}
                        <Field as={Input} id ="document" name="document" type='file' /> 
                      </Flex>
                    </FormControl>

                    <FormControl>
                      <FormLabel htmlFor="tasks">Initial Tasks</FormLabel>
                      <Field as={SelectTasks} id="tasks" name="tasks" />
                    </FormControl>

                    <Button type="submit" colorScheme="orange" width="full" onClick = {onClose}>
                      Submit
                    </Button>
                  </VStack>
                </form>
              )}
            </Formik>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  )
}


export default HomeButtons;
