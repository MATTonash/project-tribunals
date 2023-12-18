import { Flex } from "@chakra-ui/layout";
import { EntryType } from "../../lib/TaskEntry";

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
    >
      <h1>
      {props.name}
      {props.author}
      {props.type}
      {props.description}
      </h1>
    </Flex>
  )
}

export default TaskManagerComponent;