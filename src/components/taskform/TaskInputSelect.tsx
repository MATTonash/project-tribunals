import { Button, Center, IconButton } from '@chakra-ui/react'
import { useState } from 'react'
import { Select } from '@chakra-ui/react'
import { Flex } from '@chakra-ui/react'
import Task from '../../lib/Task'
import { Heading } from '@chakra-ui/react'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
} from '@chakra-ui/react'
import {AddIcon, CloseIcon} from '@chakra-ui/icons'
import {FocusLock} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'

import {
Accordion,
AccordionItem,
AccordionButton,
AccordionPanel,
AccordionIcon,
} from '@chakra-ui/react'

import { Input } from '@chakra-ui/react'



interface Props {
  task: string[];
  //should probably be Task, not string
}


const TaskInputSelect = (props: Props) => {
  
  
  const [iconState, setIconState] = useState(<AddIcon />)
  const onOpen = () => setIconState(<CloseIcon/>)
  const onClose = () => setIconState(<AddIcon />)
  
  const [selectionState, setSelectionState] = useState(false)
  const [selectedTask, setSelectedTask] = useState('')

  if (selectionState == true) {
    return (
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box as="span" flex='1' textAlign='left'>
                INPUT
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>

            <Flex
            flexDirection={'column'}
            alignContent={'center'}
            justifyContent={'center'}
            gap={'4'}
            >

              <FormControl>
                <FormLabel>Search Query (Regex)</FormLabel>
                <Input />
                <FormHelperText>We'll never share your email.</FormHelperText>
              </FormControl>

              <FormControl>
                <FormLabel>Validation Checks</FormLabel>
                <Input />
                <FormHelperText>We'll never share your email.</FormHelperText>
              </FormControl>

            </Flex>


          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    )
  }

  return (

    <Flex>
      <Heading as="h1" size="m"> Search for: </Heading>

      <Popover
        placement='right'
        returnFocusOnClose = {false}
        closeOnBlur={false}
        onOpen = {onOpen}
        onClose = {onClose}
      >
        <PopoverTrigger>
        <IconButton 
          aria-label='Search Input Types' 
          icon={iconState} 
          isRound = {true}
        />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverBody>  
          <Select 
            placeholder='Select'
            borderRadius={'2xl'}
            >
              {props.task.map((options, index) => (<option value = {index}>{options}</option>))}
          </Select>
      </PopoverBody>
        </PopoverContent>
      </Popover>
    </Flex>
  )
}


export default TaskInputSelect;