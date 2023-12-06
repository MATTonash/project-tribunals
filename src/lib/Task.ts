import { TaskEntry } from "./TaskEntry";

export type Validation = "auto" | "human" | "double"

export type Task = {
  name: string;
  description: string;
  entries: TaskEntry[];
  id: string;
  validation?: Validation;
};
