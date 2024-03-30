export type RevTag = { _rev: string }

export interface Task {
  _id: string
  name: string
  description: string
  fieldTypes: {
    [fieldTypeId: string]: {
      name: string
      isRequired: boolean
    }
  }
}

export interface FieldValue {
  _id: string
  value: string
}

export interface TaskInstance {
  _id: string
  status: string
  inputFields: { [fieldTypeId: string]: FieldValue[] }
  highlights: string[]
}

export interface AnnotatedDocument {
  _id: string
  _attachments: {
    [filename: string]: {
      content_type: 'application/pdf'
      data: string
    }
  }
  name: string
  caseId: string
  createdDate: Date
  editedDate: Date
  tasks: {
    taskId: string
    taskInstanceId: string
  }[]
}
