import { Task } from "../types";

export let tasks: { [taskId: string]: Task } = {
  taskId1: {
    name: "Label Judge's Name",
    description: "Find and write down the judge's name",
    taskEntries: {
      entryId1: {
        name: "Judge's name",
        type: "shorttext",
      },
    },
  },
  taskId2: {
    name: "MultiModal Task",
    description: "Answer these multimodal inputs",
    taskEntries: {
      entryId1: {
        name: "Drop down",
        type: "dropdown",
        hint: "Select an option",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      },
      entryId2: {
        name: "Short text",
        type: "shorttext",
      },
      entryId3: {
        name: "Long text",
        type: "longtext",
      },
      entryId4: {
        name: "Radio",
        type: "radio",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      },
      entryId5: {
        name: "Number",
        type: "number",
      },
    },
  },
  taskId3: {
    name: "Drop Down task",
    description: "Answer this drop down",
    taskEntries: {
      entryId1: {
        name: "Drop down",
        type: "dropdown",
        hint: "Select an option",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      },
    },
  },
  taskId4: {
    name: "Short text Task",
    description: "Answer this short text",
    taskEntries: {
      entryId2: {
        name: "Short text",
        type: "shorttext",
      },
    },
  },
  taskId5: {
    name: "Long text task",
    description: "Answer this long text",
    taskEntries: {
      entryId3: {
        name: "Long text",
        type: "longtext",
      },
    },
  },
  taskId6: {
    name: "Radio task",
    description: "Answer this radio",
    taskEntries: {
      entryId4: {
        name: "Radio",
        type: "radio",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      },
    },
  },
  taskId7: {
    name: "Number task",
    description: "Fill this number input",
    taskEntries: {
      entryId5: {
        name: "Number",
        type: "number",
      },
    },
  },
};
