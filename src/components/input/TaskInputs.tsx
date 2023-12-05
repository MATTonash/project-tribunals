import Task from "../../lib/Task";
import { TaskEntry } from "../../lib/TaskEntry";
import LongTextInput from "./LongTextInput";
import NumericInput from "./NumericInput";
import { SelectInput } from "./SelectInput";
import ShortTextInput from "./ShortTextInput";

interface Props {
  task: Task;
}

export const TaskInputs = (props: Props) => {
  return props.task.entries.map((taskEntry: TaskEntry) => {
    // TODO: pass props down
    if (taskEntry.type === "dropdown") {
      return <SelectInput options={[]} name={""} label={props.task.name} />;
    } else if (taskEntry.type === "longtext") {
      return <LongTextInput />;
    } else if (taskEntry.type === "shorttext") {
      return <ShortTextInput name={""} label={props.task.name} />;
    } else if (taskEntry.type === "number") {
      return <NumericInput />;
    }
  });
};
