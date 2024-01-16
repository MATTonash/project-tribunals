import { FormikValues } from "formik";
import { MutableRefObject, createContext, useContext } from "react";

export interface TaskFormRef {
  values: FormikValues;
  setFieldValue: (fieldId: string, value: string) => void;
}

export interface PdfViewerRef {
    saveHighlights: () => void;
    removeHighlight: (fieldId: string) => void;
    setHighlightPicker: (fieldTypeId: string | null) => void;
    removeGhostHighlight: () => void;
    addGhostHighlight: (index: number) => void;
}

export interface AnnotatorUtils {
    taskFormRef: MutableRefObject<TaskFormRef | undefined>;
    highlightsRef: MutableRefObject<PdfViewerRef | undefined>;
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