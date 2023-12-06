/**
 * Represents a single task entry within a task.
 *
 * @example
 * // Example task entry
 * {
 *   name: "Dropdown Entry",
 *   type: "dropdown",
 *   hint: "Select an option from the list",
 * }
 */
export interface TaskEntry {
  /** The name of the task entry. */
  name: string;
  /** The type of input for the task entry. */
  type: "dropdown" | "shorttext" | "longtext" | "radio" | "number";
  /** An optional hint telling the user how to answer the task entry. */
  hint?: string;

  // TODO: Complete validation and autoinput
  searchKey?: unknown;
  validationKey?: unknown;
}

/**
 * Represents a task. Something the user must complete for their document.
 *
 * @example
 * // Example task
 * {
 *   name: "Task 1",
 *   description: "Description of Task 1",
 *   taskEntries: {
 *     entryId1: {
 *       name: "Dropdown Entry",
 *       type: "dropdown",
 *       hint: "Select an option from the list",
 *     },
 *     // ... other task entries
 *   }
 * }
 */
export interface Task {
  /** The name of the task. E.g, "Label Judge's Name" */
  name: string;
  /** Give a description of the task which will be displayed above all inputs */
  description: string;
  /**
   * A map of task entries associated with their unique IDs.
   * These represent all the form inputs for a particular task
   */
  taskEntries: { [entryId: string]: TaskEntry };
}

/**
 * Represents a document containing metadata, creation and last edited dates,
 * and a collection of tasks with their statuses and inputs.
 *
 * @example
 * // Example document
 * {
 *   name: "Document 1",
 *   creationDate: new Date("2023-01-01"),
 *   lastEdited: new Date("2023-12-31"),
 *   tasks: {
 *     taskId1: {
 *       status: "incomplete",
 *       taskEntries: {
 *         entryId1: {
 *           input: "User Input 1",
 *           validation: "auto",
 *         },
 *         // ... other task entries
 *       }
 *     },
 *     // ... other tasks
 *   }
 * }
 */
export interface Document {
  /** The user chosen name for the document */
  name: string;
  /** The date when the document was created by the user */
  creationDate: Date;
  /** The date when the document was last edited */
  lastEdited: Date;
  /**
   * A map of tasks associated with their unique IDs,
   * each containing status and task entry inputs.\
   */
  tasks: {
    [taskId: string]: {
      status: "complete" | "incomplete";
      taskEntries: {
        [entryId: string]: {
          input: string | number | boolean;
          validation?: "auto" | "human" | "double";
        };
      };
    };
  };
}
