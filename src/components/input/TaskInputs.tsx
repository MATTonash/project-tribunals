/**
 * @deprecated Use TaskForm instead
 */
export const TaskInputs = () => {
  return null;
  // task.entries.map((taskEntry: TaskEntry) => {
  //   if (taskEntry.type === "dropdown") {
  //     return (
  //       <SelectInput
  //         options={[]}
  //         name={""}
  //         label={task.name}
  //         key={taskEntry.id}
  //       />
  //     );
  //   } else if (taskEntry.type === "longtext") {
  //     return <LongTextInput key={taskEntry.id} />;
  //   } else if (taskEntry.type === "shorttext") {
  //     return <ShortTextInput name={""} label={task.name} key={taskEntry.id} />;
  //   } else if (taskEntry.type === "number") {
  //     return <NumericInput key={taskEntry.id} />;
  //   }
  // });
};
