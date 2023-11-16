interface BaseTaskEntry {
  searchQueryRegex?: string;
  validationChecks?: any[];
}

interface DropDownTaskEntry extends BaseTaskEntry {
  data: unknown;
}

interface ShortTextTaskEntry extends BaseTaskEntry {
  data: string;
}

interface LongTextTaskEntry extends BaseTaskEntry {
  data: string;
}

interface RadioTaskEntry extends BaseTaskEntry {
  // Might need to revisit this type
  data: number;
}

interface NumericTaskEntry extends BaseTaskEntry {
  data: number;
}

// One input in a Task
type TaskEntry =
  | DropDownTaskEntry
  | ShortTextTaskEntry
  | LongTextTaskEntry
  | RadioTaskEntry
  | NumericTaskEntry;
