// Same concerns here as in AnnotatedDocument
type Task = {
  name: string;
  description: string;
  key: number;
  entries: TaskEntry[];
};

export default Task;
