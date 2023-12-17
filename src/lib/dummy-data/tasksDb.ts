import { Task } from "../types";

export let tasksDb: { [taskId: string]: Task } = {
  taskId1: {
    name: "Label Judge's Name",
    description: "Find and write down the judge's name",
    inputFields: {
      fieldId1: {
        name: "Judge's name",
        isRequired: true,
        container: "shorttext",
      },
    },
  },
  taskId2: {
    name: "MultiModal Task",
    description: "Answer these multimodal inputs",
    inputFields: {
      fieldId1: {
        name: "Drop down",
        isRequired: true,
        container: "dropdown",
        hint: "Select an option",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      },
      fieldId2: {
        name: "Short text",
        isRequired: false,
        container: "shorttext",
      },
      fieldId3: {
        name: "Long text",
        isRequired: true,
        container: "longtext",
      },
      fieldId4: {
        name: "Number",
        isRequired: true,
        container: "number",
        min: 10,
        max: 50,
      },
    },
  },
  taskId3: {
    name: "Drop Down task",
    description: "Answer this drop down",
    inputFields: {
      fieldId1: {
        name: "Drop down",
        isRequired: false,
        container: "dropdown",
        hint: "Select an option",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      },
    },
  },
  taskId4: {
    name: "Short text Task",
    description: "Answer this short text",
    inputFields: {
      fieldId1: {
        name: "Short text",
        isRequired: false,
        container: "shorttext",
      },
    },
  },
  taskId5: {
    name: "Long text task",
    description: "Answer this long text",
    inputFields: {
      fieldId1: {
        name: "Long text",
        isRequired: false,
        container: "longtext",
      },
    },
  },
  taskId6: {
    name: "Number task",
    description: "Fill this number input",
    inputFields: {
      fieldId1: {
        name: "Number",
        isRequired: false,
        container: "number",
        min: 10,
        max: 50,
      },
    },
  },
  taskId7: {
    name: "MultiModal Task 2",
    description: "Answer these multimodal inputs",
    inputFields: {
      fieldId1: {
        name: "Drop down",
        isRequired: true,
        container: "dropdown",
        hint: "Select an option",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      },
      fieldId2: {
        name: "Short text",
        isRequired: false,
        container: "shorttext",
      },
      fieldId3: {
        name: "Long text",
        isRequired: true,
        container: "longtext",
      },
      fieldId4: {
        name: "Number",
        isRequired: true,
        container: "number",
        min: 10,
        max: 50,
      },
    },
  },
};
