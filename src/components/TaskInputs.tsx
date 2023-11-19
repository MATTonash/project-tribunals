import { useState } from "react";
import Task from "../lib/Task";
import { Flex } from "@chakra-ui/react";
import TaskItem from "./TaskItem";
import { TaskEntry } from "../lib/TaskEntry";
import { SelectInput } from "./inputs/SelectInput";

interface Props {
  task: Task;
}

export const TaskInputs = (props: Props) => {
  return props.task.entries.map(
    (taskEntry: TaskEntry) =>
      taskEntry.type === "SHORTTEXT" && (
        <SelectInput options={[]} name="someName" label="someLabel" />
      )
  );
};
