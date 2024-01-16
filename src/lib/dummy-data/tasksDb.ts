import { Task } from "../types";

export let tasksDb: { [taskId: string]: Task } = {
  taskId1: {
    name: "Label Judge's Name",
    description: `Find and write down the judge's name.
    Fields grouped by fieldtype will have the same validation and entry input requirements.
    To link a highlight with a field, select some content in the PDF.
    By default, highlights will link with the most recent field of each fieldtype.
    Hold Alt (Option) and select a fieldtype to then select which field you wish to associated a highlight with.`,
    fieldTypes: {
      fieldTypeId1: {
        name: "Field Type 1",
        isRequired: false,
        container: "shorttext",
      },
      fieldTypeId2: {
        name: "Field Type 2",
        isRequired: true,
        container: "shorttext",
      },
    },
  },
};
