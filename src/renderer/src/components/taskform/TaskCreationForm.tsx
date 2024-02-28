import { Center, Flex, chakra } from "@chakra-ui/react";
import { useState } from "react";
import Task from "../../lib/Task";
import ShortTextInput from "../inputs/ShortTextInput";
import TaskInputSelect from "./TaskInputSelect";
import { Box } from '@chakra-ui/react'
import LongTextInput from "../inputs/LongTextInput";
import { CloseButton } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Spacer } from "@chakra-ui/react";


const TaskCreationForm = ( ) => {


  const tasks = [
    'hi'
  ];
  

  const [taskName, setTaskName] = useState('')

  return (
    <Flex flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
      <Box 
        w = {"100%"}
        borderWidth='1px' 
        borderColor={'black'} 
        overflow='hidden' 
        backdropFilter={'auto'} 
        boxShadow={'base'}>
        <Flex h={16} bg={"stoneGray.50"} alignItems = {'center'} justifyContent = {"center"} flexDirection={"row"}>
          <h1>
            <b>Create a Task</b>
          </h1>
        </Flex>
      <Box 
      p = {'50'}>
      <Flex flexDirection={'column'} gap={'10'}>

        <ShortTextInput label = 'Name of Task' name = "hi"></ShortTextInput>
        <LongTextInput label = 'Description'></LongTextInput>
        <TaskInputSelect task = {tasks}></TaskInputSelect>
        
        
        <Spacer/>
        
        <Flex alignItems={"center"} justifyContent={"center"}>
          <Button colorScheme='blue'>Create</Button>
        </Flex>
      </Flex>
      </Box>
      </Box>
    </Flex>
  )
}

export default TaskCreationForm;