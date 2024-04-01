import { Button, Checkbox, Flex, Spacer } from '@chakra-ui/react'
import { ChangeEvent, MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import { Task } from 'src/common/types'

interface Props {
  task: Task
  index: number
  onClick: (event: MouseEvent<HTMLButtonElement>) => void
  onCheckboxChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const TaskItem = ({ task, index, onClick, onCheckboxChange }: Props) => {
  return (
    <Flex
      height="70px"
      gap={2}
      alignItems="center"
      p={4}
      bg={index % 2 === 1 ? 'stoneGray.50' : 'white'}
    >
      <Checkbox colorScheme="salmon" onChange={onCheckboxChange} />
      <Button
        variant="link"
        fontWeight={600}
        size="lg"
        colorScheme="black"
        onClick={onClick}
        as={Link}
        to={task._id}
      >
        {task.name}
      </Button>
      <Spacer />
      {/* {documentsDb[documentId].tasks[taskId].status === 'complete' && (
        <IoCheckmark fontSize={24} color={'green'} />
      )} */}
    </Flex>
  )
}

export default TaskItem
