import { AnnotatedDocument, RevTag, Task, TaskInstance } from '../common/types'

export interface IPCAPI {
  ping: () => Promise<void>
  putTask: (task: Task) => Promise<void>
  getTask: (taskId: string) => Promise<Task & RevTag>
  getTasks: (taskIds: string[]) => Promise<Array<Task & RevTag>>
  removeTask: (task: Task & RevTag) => Promise<void>
  putAnnotatedDocument: (annotatedDoc: AnnotatedDocument) => Promise<void>
  getAnnotatedDocument: (annotatedDocId: string) => Promise<AnnotatedDocument & RevTag>
  removeDocument: (annotatedDoc: AnnotatedDocument & RevTag) => Promise<void>
  putTaskInstance: (taskInstance: TaskInstance) => Promise<void>
  getTaskInstance: (taskInstanceId: string) => Promise<TaskInstance & RevTag>
  removeTaskInstance: (taskInstance: TaskInstance & RevTag) => Promise<void>
}
