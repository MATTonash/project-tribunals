export type InputFieldContainer =
  | "dropdown"
  | "shorttext"
  | "longtext"
  | "radio"
  | "number";
export type InputFieldValue = string | number | boolean;
export type InputFieldValidation = "auto" | "human" | "double";
export type TaskStatus = "complete" | "incomplete";
export type TaskId = string;
export type FieldId = string;

export interface InputField {
  name: string;
  container: InputFieldContainer;
  hint?: string;
  options?: string[];

  // TODO: Complete validation and autoinput
  searchKey?: unknown;
  validationKey?: unknown;
}

export interface Task {
  name: string;
  description: string;
  inputFields: { [fieldId: FieldId]: InputField };
}

export interface LabelledDocument {
  name: string;
  caseId: string;
  /** url of the pdf document associated. TODO: Change this */
  url: string;
  creationDate: Date;
  lastEdited: Date;
  tasks: {
    [taskId: TaskId]: {
      status: TaskStatus;
      inputFields: {
        [fieldId: FieldId]: {
          input?: InputFieldValue;
          validation?: InputFieldValidation;
        };
      };
    };
  };
}
