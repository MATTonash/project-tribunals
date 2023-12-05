import Task from "../Task";

export const tasks: Task[] = [
  {
    name: "Judge's Name",
    description: "The name of the judge/s",
    entries: [{ type: "shorttext", data: "" }],
    key: 1,
  },
  // { name: "Defendant's Name", entryType: "label", entryCount: 0, key: 2 },
  // { name: "Claimant's Name", entryType: "label", entryCount: 0, key: 3 },
  // { name: "Reference Number", entryType: "label", entryCount: 1, key: 4 },
  // { name: "Accusation", entryType: "text", entryCount: 2, key: 5 },
  // { name: "Task Name", entryType: "multi", entryCount: 3, key: 6 },
  // { name: "Payout", entryType: "number", entryCount: 1, key: 7 },
];
