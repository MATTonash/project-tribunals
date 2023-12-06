export type EntryType =
  | "dropdown"
  | "shorttext"
  | "longtext"
  | "radio"
  | "number";

// It might make more sense to define all these classes if we're going to be expecting so many default values
export type TaskEntry = {
  searchQueryRegex?: string;
  validationChecks?: any[];
  type: EntryType;
  data: any;
  id: string;
};
