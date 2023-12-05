import Task from "../Task";
import { EntryType } from "../TaskEntry";

const entryTypes: EntryType[] = ["dropdown",
"shorttext",
"longtext",
"radio",
"number"]

export const tasks: Task[] = [
  {
    name: "Judge's Name",
    description: "The name of the judge/s",
    entries: entryTypes.map((entryType) => ({type: entryType, data: ""})),
    key: 1,
  },
  {
    name: "Task 2",
    description: "The name of the judge/s",
    entries: [{ type: "shorttext", data: "" }],
    key: 2,
  },
  {
    name: "Task 3",
    description: "The name of the judge/s",
    entries: [{ type: "shorttext", data: "" }],
    key: 3,
  },
  {
    name: "Task 4",
    description: "The name of the judge/s",
    entries: [{ type: "shorttext", data: "" }],
    key: 4,
  },
  {
    name: "Task 5",
    description: "The name of the judge/s",
    entries: [{ type: "shorttext", data: "" }],
    key: 5,
  },
  {
    name: "Task 6",
    description: "The name of the judge/s",
    entries: [{ type: "shorttext", data: "" }],
    key: 6,
  },
  {
    name: "Task 7",
    description: "The name of the judge/s",
    entries: [{ type: "shorttext", data: "" }],
    key: 7,
  },
  {
    name: "Task 8",
    description: "The name of the judge/s",
    entries: [{ type: "shorttext", data: "" }],
    key: 8,
  },
  {
    name: "Task 9",
    description: "The name of the judge/s",
    entries: [{ type: "shorttext", data: "" }],
    key: 9,
  },
  // { name: "Defendant's Name", entryType: "label", entryCount: 0, key: 2 },
  // { name: "Claimant's Name", entryType: "label", entryCount: 0, key: 3 },
  // { name: "Reference Number", entryType: "label", entryCount: 1, key: 4 },
  // { name: "Accusation", entryType: "text", entryCount: 2, key: 5 },
  // { name: "Task Name", entryType: "multi", entryCount: 3, key: 6 },
  // { name: "Payout", entryType: "number", entryCount: 1, key: 7 },
];
