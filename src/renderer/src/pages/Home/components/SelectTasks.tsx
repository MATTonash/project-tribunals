import { Select } from '@chakra-ui/react'
import TaskCard from '@renderer/components/TaskCard'
import { Task } from 'src/common/types'

import { Flex } from '@chakra-ui/react'


const SelectTasks = () => {
  return (
    <Flex>
        <Select placeholder='Select option'>
        <option value='option1'>Option 1</option>
        <option value='option2'>Option 2</option>
        <option value='option3'>Option 3</option>
        </Select>
    </Flex>

   
  )
}

export default SelectTasks