import { Task } from "../Task";
import { EntryType } from "../TaskEntry";

const entryTypes: EntryType[] = [
  "dropdown",
  "shorttext",
  "longtext",
  "radio",
  "number",
];

export const tasks: Task[] = [
  {
    name: "Task 1",
    description: "The name of the judge/s",
    entries: entryTypes.map((entryType, index) => ({
      type: entryType,
      data: "",
      id: index.toString(),
    })),
    id: "1",
    validation: "auto",
  },
  {
    name: "Task 2.2",
    description: "The name of the judge/s",
    entries: entryTypes.map((entryType, index) => ({
      type: entryType,
      data: "",
      id: index.toString(),
    })),
    id: "2",
    validation: "human",
  },
  {
    name: "Task 3",
    description: "The name of the judge/s",
    entries: entryTypes.map((entryType, index) => ({
      type: entryType,
      data: "",
      id: index.toString(),
    })),
    id: "3",
    validation: "double",
  },
  {
    name: "Task 4",
    description: "The name of the judge/s",
    entries: entryTypes.map((entryType, index) => ({
      type: entryType,
      data: "",
      id: index.toString(),
    })),
    id: "4",
  },
  {
    name: "Task 5",
    description: "The name of the judge/s",
    entries: entryTypes.map((entryType, index) => ({
      type: entryType,
      data: "",
      id: index.toString(),
    })),
    id: "5",
  },
  {
    name: "Task 6",
    description: "The name of the judge/s",
    entries: entryTypes.map((entryType, index) => ({
      type: entryType,
      data: "",
      id: index.toString(),
    })),
    id: "6",
  },
  {
    name: "Task 7",
    description: "The name of the judge/s",
    entries: entryTypes.map((entryType, index) => ({
      type: entryType,
      data: "",
      id: index.toString(),
    })),
    id: "7",
  },
  {
    name: "Task 8",
    description: "The name of the judge/s",
    entries: entryTypes.map((entryType, index) => ({
      type: entryType,
      data: "",
      id: index.toString(),
    })),
    id: "8",
  },
  {
    name: "Task 9",
    description: "The name of the judge/s",
    entries: entryTypes.map((entryType, index) => ({
      type: entryType,
      data: "",
      id: index.toString(),
    })),
    id: "9",
  },
  // { name: "Defendant's Name", entryType: "label", entryCount: 0, id: 2 },
  // { name: "Claimant's Name", entryType: "label", entryCount: 0, id: 3 },
  // { name: "Reference Number", entryType: "label", entryCount: 1, id: 4 },
  // { name: "Accusation", entryType: "text", entryCount: 2, id: 5 },
  // { name: "Task Name", entryType: "multi", entryCount: 3, id: 6 },
  // { name: "Payout", entryType: "number", entryCount: 1, id: 7 },
];
