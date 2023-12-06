import { Task } from "../../lib/Task";
import { TaskEntry } from "../../lib/TaskEntry";
import LongTextInput from "./LongTextInput";
import NumericInput from "./NumericInput";
import { SelectInput } from "./SelectInput";
import ShortTextInput from "./ShortTextInput";

interface Props {
  task: Task;
}

export const TaskInputs = ({ task }: Props) => {
  return task.entries.map((taskEntry: TaskEntry) => {
    if (taskEntry.type === "dropdown") {
      return (
        <SelectInput
          options={[]}
          name={""}
          label={task.name}
          key={taskEntry.id}
        />
      );
    } else if (taskEntry.type === "longtext") {
      return <LongTextInput key={taskEntry.id} />;
    } else if (taskEntry.type === "shorttext") {
      return <ShortTextInput name={""} label={task.name} key={taskEntry.id} />;
    } else if (taskEntry.type === "number") {
      return <NumericInput key={taskEntry.id} />;
    }
  });
};
