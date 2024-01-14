import { Task } from "../types";

export let tasksDb: { [taskId: string]: Task } = {
  taskId1: {
    name: "Label Judge's Name",
    description: "Find and write down the judge's name",
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
