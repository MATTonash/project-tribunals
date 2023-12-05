import { Center, Flex } from "@chakra-ui/react";
import { useState } from "react";
import Task from "../../lib/Task";
import { IconButton } from '@chakra-ui/react'
import ShortTextInput from "../inputs/ShortTextInput";
import TaskInputSelect from "./TaskInputSelect";
import { Box } from '@chakra-ui/react'
import LongTextInput from "../inputs/LongTextInput";


const TaskCreationForm = ( ) => {

  const tasks = [
    'hi'
  ];
  

  const [taskName, setTaskName] = useState('')

  return (
    <Flex flexDirection={"column"} alignItems={"center"}>
      <Box boxSize={'auto'} borderWidth='1px' borderColor={'black'} overflow='hidden' backdropFilter={'auto'} boxShadow={'base'}>
      <Flex h={16} bg={"stoneGray.50"} alignItems={'center'}>
        <h1>
          <b>Create a Task</b>
        </h1>
      </Flex>
      <ShortTextInput label = 'Name of Task' name = "hi"></ShortTextInput>
      <LongTextInput label = 'Description'></LongTextInput>
      <TaskInputSelect task = {tasks}></TaskInputSelect>
    </Box>
    </Flex>
  )
}

export default TaskCreationForm;