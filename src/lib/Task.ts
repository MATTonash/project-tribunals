// Same concerns here as in AnnotatedDocument
type Task = {
  name: string;
  entryType: "label" | "text" | "number" | "multi";
  entryCount: number;
  key: string;
};

export default Task;
