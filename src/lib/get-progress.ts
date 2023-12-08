import { documentsDb } from "./dummy-data/documentsDb";

export const getProgress = (
  documentId: string,
): { completedTasks: number; totalTasks: number } => {
  const document = documentsDb[documentId];

  if (!document || !document.tasks) {
    return { completedTasks: 0, totalTasks: 0 };
  }

  const tasks = Object.values(document.tasks);
  const completedTasks = tasks.reduce(
    (count, task) => count + (task.status === "complete" ? 1 : 0),
    0,
  );

  return {
    completedTasks,
    totalTasks: tasks.length,
  };
};
