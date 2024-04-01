import { AnnotatedDocument, Task, TaskInstance } from '../../common/types'
import { putAnnotatedDocument } from './annotatedDocsDB'
import { putTaskInstance } from './taskInstancesDB'
import { putTask } from './tasksDB'

const dummyTask: Task = {
  _id: 'task1',
  name: "Label judge's name",
  description: `Find and write down the judge's name.
    Fields grouped by fieldtype will have the same validation and entry input requirements.
    To link a highlight with a field, select some content in the PDF.
    By default, highlights will link with the most recent field of each fieldtype.
    Hold Alt (Option) and select a fieldtype to then select which field you wish to associated a highlight with.`,
  fieldTypes: {
    fieldTypeId1: {
      name: 'Field Type 1',
      isRequired: false
    },
    fieldTypeId2: {
      name: 'Field Type 2',
      isRequired: true
    }
  }
}

const dummyTaskInstance: TaskInstance = {
  _id: '12345',
  status: 'incomplete',
  inputFields: {
    fieldTypeId1: [
      { value: 'nothing', _id: 'fieldId1' },
      { value: 'something', _id: 'fieldId2' },
      { value: 'woah', _id: 'fieldId3' }
    ],
    fieldTypeId2: [{ value: 'empty', _id: 'fieldId4' }]
  },
  highlights: [
    {
      content: {
        text: 'This fuels a fast edit-refresh cycle, whichpromises an immersive coding experience that is quite appealing to creative developers.'
      },
      position: {
        boundingRect: {
          x1: 76.375,
          y1: 666.21875,
          x2: 733.61328125,
          y2: 706.140625,
          width: 809.9999999999999,
          height: 1200,
          pageNumber: 1
        },
        rects: [
          {
            x1: 459.168701171875,
            y1: 666.21875,
            x2: 733.61328125,
            y2: 686.21875,
            width: 809.9999999999999,
            height: 1200,
            pageNumber: 1
          },
          {
            x1: 76.375,
            y1: 686.140625,
            x2: 671.4954833984375,
            y2: 706.140625,
            width: 809.9999999999999,
            height: 1200,
            pageNumber: 1
          }
        ]
      },
      fieldTypeName: "Judge's name",
      id: 'fieldId1'
    }
  ]
}

const dummyDocument: AnnotatedDocument = {
  _id: Math.random().toString(16).slice(2),
  pdfPath: 'https://arxiv.org/pdf/1708.08021.pdf',
  name: 'Daniel v Monash',
  caseId: 'EA23/24/35',
  createdDate: new Date(2023, 12, 7),
  editedDate: new Date(),
  tasks: [{ taskId: 'task1', taskInstanceId: '12345' }]
}

export function insertDummyData() {
  putTask(dummyTask)
  putTaskInstance(dummyTaskInstance)
  putAnnotatedDocument(dummyDocument)
}
