import { Flex } from "@chakra-ui/layout"
import { Select } from "@chakra-ui/select"
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Spacer } from "@chakra-ui/layout"
import { IconButton } from '@chakra-ui/react'
import { SpinnerIcon } from '@chakra-ui/icons'
import { Divider } from '@chakra-ui/react'
import TaskCreationForm from "../taskform/TaskCreationForm"

const TaskManagerHeader = () => {

    
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
            <Button> Add Task</Button>
            <Spacer/>
            <Input placeholder={'Search your tasks'} w={'300'}/>
            <IconButton aria-label = 'Reload Page' icon={<SpinnerIcon />} />
            <Button>Import</Button>
            <Button>Export</Button>
        </Flex>
        <Flex 
            flexDirection={'row'}
            p={'2'}
            gap={'3'}
        >
            <h1>Name</h1>
            <Divider orientation="vertical" borderColor="blackAlpha"/>
            <h1>Name</h1>
            <Divider orientation="vertical" borderColor="black" />
            <h1>Name</h1>
        </Flex>
    </Flex>
  )
}

export default TaskManagerHeader;