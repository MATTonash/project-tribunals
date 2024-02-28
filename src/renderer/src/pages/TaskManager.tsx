import ShortTextInput from "./../components/inputs/ShortTextInput";
import TaskCreationForm from "./../components/taskform/TaskCreationForm";
import TaskInputSelect from "./../components/taskform/TaskInputSelect";
import TaskManagerComponent from "./../components/taskmanager/TaskManagerComponent";
import TaskManagerHeader from "./../components/taskmanager/TaskManagerHeader";
import { EntryType } from "./../lib/TaskEntry";
import { Flex } from "@chakra-ui/layout";




const TaskManager = () => {


  return (
    <Flex flexDirection={"column"}>
      <TaskManagerHeader></TaskManagerHeader>
      <TaskManagerComponent  
      name ='hello'
      author= 'hood'
      type = 'shorttext'
      description= "haha"
      autocomplete = {true}
      autovalidation = {true}
      id = '122343'
      />
    </Flex>


  )
};

export default TaskManager;
