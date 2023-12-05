import { Button, ButtonGroup, Flex } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'

import Task from '../../lib/Task'
import { Heading } from '@chakra-ui/react'

interface Props {
  task: string[];
  //should probably be Task, not string
}

const TaskInputSelect = (props: Props) => {

  return (
    <Flex flexDirection={'column'} gap={'3'}>
      <Heading as="h1" size="m"> Search for: </Heading>
      <Select placeholder='Select option'>
         {props.task.map((options, index) => (<option value = {index}>{options}</option>))}
      </Select>
      </Flex>
  )
}

export default TaskInputSelect