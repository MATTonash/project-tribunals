interface BaseTaskEntry {
  searchQueryRegex?: string;
  validationChecks?: any[];
}

interface DropDownTaskEntry extends BaseTaskEntry {
  type: "dropDown";
  data: unknown;
}

interface ShortTextTaskEntry extends BaseTaskEntry {
  type: "shortText";
  data: string;
}

interface LongTextTaskEntry extends BaseTaskEntry {
  type: "longText";
  data: string;
}

interface RadioTaskEntry extends BaseTaskEntry {
  type: "radio";
  // Might need to revisit this type
  data: number;
}

interface NumericTaskEntry extends BaseTaskEntry {
  type: "numeric";
  data: number;
}

// One input in a Task
type TaskEntry =
  | DropDownTaskEntry
  | ShortTextTaskEntry
  | LongTextTaskEntry
  | RadioTaskEntry
  | NumericTaskEntry;
