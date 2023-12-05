import { TaskEntry } from "./TaskEntry";

type Task = {
  name: string;
  description: string;
  key: number;
  entries: TaskEntry[];
};

export default Task;
