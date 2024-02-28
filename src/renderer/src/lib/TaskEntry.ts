export enum EntryType {
  Dropdown = "DROPDOWN",
  ShortText = "SHORTTEXT",
  LongText = "LONGTEXT",
  Radio = "RADIO",
  Number = "NUMBER",
}

type BaseTaskEntry = {
  searchQueryRegex?: string;
  validationChecks?: any[];
};

type DropdownTaskEntry = BaseTaskEntry & {
  type: EntryType.Dropdown;
  displayName: "Drop-down";
  data: unknown;
};

type ShortTextTaskEntry = BaseTaskEntry & {
  type: EntryType.ShortText;
  displayName: "Short text";
  data: string;
};

type LongTextTaskEntry = BaseTaskEntry & {
  type: EntryType.LongText;
  displayName: "Long text";
  data: string;
};

type RadioTaskEntry = BaseTaskEntry & {
  type: EntryType.Radio;
  displayName: "Radio";
  // Might need to revisit this type
  data: number;
};

interface NumericTaskEntry extends BaseTaskEntry {
  type: EntryType.Number;
  displayName: "Numeric";
  data: number;
}

// One input in a Task
export type TaskEntry =
  | DropdownTaskEntry
  | ShortTextTaskEntry
  | LongTextTaskEntry
  | RadioTaskEntry
  | NumericTaskEntry;
