import { MutableRefObject, createContext, useContext } from "react";
import { FieldId, InputFieldValue } from "../lib/types";
import { Highlight } from "react-pdf-highlighter-extended";

export interface TaskFormRef {
    setFieldValue: (fieldId: FieldId, value: InputFieldValue) => void;
}

export interface AnnotatorUtils {
    taskFormRef: MutableRefObject<TaskFormRef | null>;
    highlightsRef: MutableRefObject<Array<Highlight>>
};

export const AnnotatorContext = createContext<AnnotatorUtils | undefined>(
  undefined
);

export const useAnnotatorUtils = () => {
  const annotatorUtils = useContext(AnnotatorContext);

  if (annotatorUtils === undefined) {
    throw new Error("useAnnotatorUtils must be used within an AnnotatorContext!");
  }

  return annotatorUtils;
};