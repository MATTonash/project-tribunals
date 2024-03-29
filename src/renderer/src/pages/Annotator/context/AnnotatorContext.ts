import { FormikValues } from "formik";
import { MutableRefObject, createContext, useContext } from "react";
import {
  GhostHighlight,
  Highlight,
  PdfHighlighterUtils,
} from "react-pdf-highlighter-extended";

export interface TaskFormRef {
  values: FormikValues;
  setFieldValue: (fieldId: string, value: string) => void;
}

export interface AnnotatorUtils {
  taskFormRef: MutableRefObject<TaskFormRef | undefined>;
  addHighlight: (
    highlight: GhostHighlight,
    fieldTypeId: string,
    index?: number,
  ) => void;
  removeHighlight: (fieldId: string) => void;
  highlights: Array<Highlight>;
  saveHighlights: () => void;
  pdfHighlighterUtilsRef: MutableRefObject<PdfHighlighterUtils | undefined>;
  highlightPicker: string | null;
  setHighlightPicker: (fieldTypeId: string | null) => void;
}

export const AnnotatorContext = createContext<AnnotatorUtils | undefined>(
  undefined,
);

export const useAnnotatorUtils = () => {
  const annotatorUtils = useContext(AnnotatorContext);

  if (annotatorUtils === undefined) {
    throw new Error(
      "useAnnotatorUtils must be used within an AnnotatorContext!",
    );
  }

  return annotatorUtils;
};
