import { LabelledDocument } from "../types";

export let documentsDb: { [documentId: string]: LabelledDocument } = {
  documentId1: {
    name: "Daniel v Monash",
    caseId: "EA23/24/35",
    url: "https://arxiv.org/pdf/2312.00001.pdf",
    creationDate: new Date(2023, 12, 7),
    lastEdited: new Date(2023, 12, 7),
    tasks: {
      taskId1: {
        status: "incomplete",
        inputFields: {
          fieldId1: {
            input: "Jeff",
          },
        },
      },
      taskId2: {
        status: "complete",
        inputFields: {
          fieldId1: {
            //Dropdown
            input: "Option 1",
          },
          fieldId2: {
            //Short text
            input: "Nice",
            validation: "auto",
          },
          fieldId3: {
            //Long text
            input: "filler text filler text filler text filler text",
            validation: "double",
          },
          fieldId4: {
            input: 33,
            validation: "human",
          },
        },
      },
      taskId3: {
        status: "complete",
        inputFields: {
          fieldId1: {
            input: "Option 1",
          },
        },
      },
      taskId4: {
        status: "incomplete",
        inputFields: {
          fieldId1: {},
        },
      },
      taskId5: {
        status: "complete",
        inputFields: {
          fieldId1: {
            input: "Filler text, filler text",
          },
        },
      },
      taskId6: {
        status: "incomplete",
        inputFields: {
          fieldId1: {
            input: 8008,
          },
        },
      },
    },
  },
};
