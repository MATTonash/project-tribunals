import { LabelledDocument } from "../types";

export let documentsDb: { [documentId: string]: LabelledDocument } = {
  documentId1: {
    name: "Daniel v Monash",
    caseId: "EA23/24/35",
    url: "https://arxiv.org/pdf/1708.08021.pdf",
    creationDate: new Date(2023, 12, 7),
    lastEdited: new Date(2023, 12, 7),
    tasks: {
      taskId1: {
        status: "incomplete",
        inputFields: {
          fieldId1: {
            input: "Jeff",
            highlight: {
              content: {
                text: "This fuels a fast edit-refresh cycle, whichpromises an immersive coding experience that is quite appealing to creative developers.",
              },
              position: {
                boundingRect: {
                  x1: 76.375,
                  y1: 666.21875,
                  x2: 733.61328125,
                  y2: 706.140625,
                  width: 809.9999999999999,
                  height: 1200,
                  pageNumber: 1,
                },
                rects: [
                  {
                    x1: 459.168701171875,
                    y1: 666.21875,
                    x2: 733.61328125,
                    y2: 686.21875,
                    width: 809.9999999999999,
                    height: 1200,
                    pageNumber: 1,
                  },
                  {
                    x1: 76.375,
                    y1: 686.140625,
                    x2: 671.4954833984375,
                    y2: 706.140625,
                    width: 809.9999999999999,
                    height: 1200,
                    pageNumber: 1,
                  },
                ],
              },
              comment: {
                text: "Judge's name",
              },
              id: "2599712881412761",
            },
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
