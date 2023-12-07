import { LabelledDocument } from "../types";

export let documents: { [documentId: string]: LabelledDocument } = {
  documentId1: {
    name: "Daniel v Monash",
    url: "https://arxiv.org/pdf/2312.00001.pdf",
    creationDate: new Date(2023, 12, 7),
    lastEdited: new Date(2023, 12, 7),
    tasks: {
      taskId1: {
        status: "incomplete",
        taskEntries: {
          entryId1: {
            input: "Jeff",
          },
        },
      },
      taskId2: {
        status: "complete",
        taskEntries: {
          entryId1: {
            //Dropdown
            input: "Option 1",
          },
          entryId2: {
            //Short text
            input: "Nice",
            validation: "auto",
          },
          entryId3: {
            //Long text
            input: "filler text filler text filler text filler text",
            validation: "double",
          },
          entryId4: {},
          entryId5: {
            input: 33,
            validation: "human",
          },
        },
      },
      taskId3: {
        status: "complete",
        taskEntries: {
          entryId1: {
            input: "Option 1",
          },
        },
      },
      taskId4: {
        status: "incomplete",
        taskEntries: {
          entryId1: {},
        },
      },
      taskId5: {
        status: "complete",
        taskEntries: {
          entryId1: {
            input: "Filler text, filler text",
          },
        },
      },
      taskId6: {
        status: "incomplete",
        taskEntries: {
          entryId1: {
            input: "Option 1",
          },
        },
      },
      taskId7: {
        status: "incomplete",
        taskEntries: {
          entryId1: {
            input: 8008,
          },
        },
      },
    },
  },
};
