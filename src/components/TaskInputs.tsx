import Task from "../lib/Task";
import { EntryType, TaskEntry } from "../lib/TaskEntry";
import { SelectInput } from "./inputs/SelectInput";
import ShortTextInput from "./inputs/ShortTextInput";
import NumericInput from "./inputs/NumericInput";
import LongTextInput from "./inputs/LongTextInput";

interface Props {
  task: Task;
}

export const TaskInputs = (props: Props) => {
  return props.task.entries.map((taskEntry: TaskEntry) => {
    // TODO: pass props down
    if (taskEntry.type === EntryType.Dropdown) {
      return <SelectInput options={[]} name={""} label={props.task.name} />;
    } else if (taskEntry.type === EntryType.LongText) {
      return <LongTextInput />;
    } else if (taskEntry.type === EntryType.ShortText) {
      return <ShortTextInput name={""} label={props.task.name} />;
    } else if (taskEntry.type === EntryType.Number) {
      return <NumericInput />;
    }
  });
};
