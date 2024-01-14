import { MutableRefObject, createContext, useContext } from "react";
import { FormikValues } from "formik";

export interface TaskFormRef {
  values: FormikValues;
}

export interface PdfViewerRef {
    saveHighlights: () => void;
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