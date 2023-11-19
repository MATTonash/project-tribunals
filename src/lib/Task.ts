import { TaskEntry } from "./TaskEntry";

interface Task {
  name: string;
  description: string;
  key: number;
  entries: TaskEntry[];
}

export default Task;
