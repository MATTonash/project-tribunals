import { Flex } from "@chakra-ui/layout";
import { EntryType } from "../../lib/TaskEntry";
import { Avatar, Button, Image, Spacer } from "@chakra-ui/react";

interface Props {
  name: string;
  author: string;
  type: string;
  //change to entry type?
  description: string;
  autocomplete: boolean;
  autovalidation: boolean;
  id: string;

}

const TaskManagerComponent = (props : Props) => {
  return (
    <Flex 
      bg={'gray.100'}
      height={'70'}
      w = {'full'}
      flexDirection={'row'}
      p={'2'}
      gap={'3'}
      align={'Center'}
    >
      <Flex
          flexDirection = {'row'}
          gap = {'4'}
      >   
        <h1>{props.name}</h1>
        <Avatar></Avatar>
        <h1>{props.author}</h1>
        <h1>{props.type}</h1>
        <h1>{props.description}</h1>
      </Flex>
    </Flex>
  )
}

export default TaskManagerComponent;