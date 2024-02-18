import { Flex } from "@chakra-ui/layout"
import { Select } from "@chakra-ui/select"
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Spacer } from "@chakra-ui/layout"
import { IconButton } from '@chakra-ui/react'
import { SpinnerIcon } from '@chakra-ui/icons'
import { Divider } from '@chakra-ui/react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'

import TaskCreationForm from "../taskform/TaskCreationForm"
import { useDisclosure } from '@chakra-ui/react'
import { useState } from "react"
import { Grid, GridItem } from '@chakra-ui/react'
import { RiGridFill } from "react-icons/ri"
import Annotator from "../../pages/Annotator"
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'


const TaskManagerHeader = () => {
    
    const handleOnClick = () => {
        
    }

    const { isOpen, onOpen, onClose } = useDisclosure()

  return (

    
    <Flex flexDirection={"column"}>
        <Flex 
            height={'50'}
            alignItems={'center'}
            flexDirection={'row'}
            gap={'5'}
            p={'2'}
        >
            <Select 
                placeholder='Filters'
                w={'40'}
            >
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
            </Select>


            <Button onClick={onOpen}> Add Task</Button>

            <Modal isOpen={isOpen} onClose={onClose} isCentered = {true} size={"6xl"}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader></ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <TaskCreationForm></TaskCreationForm>
                </ModalBody>

                <ModalFooter>
                </ModalFooter>
                </ModalContent>
            </Modal>

            <Spacer/>
            <Input placeholder={'Search your tasks'} w={'300'}/>
            <IconButton aria-label = 'Reload Page' icon={<SpinnerIcon />} />
            <Button>Import</Button>
            <Button>Export</Button>
        </Flex>
        <Flex 
            flexDirection={'row'}
            p={'2'}
            gap={'4'}
        >
            <Flex
                flexDirection = {'row'}
                gap = {'4'}
            >   
                    <h1>Name</h1>
                   
                    <Divider orientation="vertical"/>

                    <h1>Author</h1>
                    <Divider orientation="vertical"/>
                    <h1>Type</h1>
                    <Divider orientation="vertical"/>
                    <h1>Description</h1>
                    <Spacer/>
                    <Divider orientation="vertical"/>
                    <h1>Auto-Complete</h1>
                    <Divider orientation="vertical"/>

                    <h1>Auto-Validation</h1>
                    <Divider orientation="vertical"/>

                    <h1>ID</h1>
       

              
            </Flex>
        </Flex>
    </Flex>
  )
}

export default TaskManagerHeader;