import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import { useState } from "react";

/**
 * @deprecated Use TaskForm instead
 */
const NumericInput = () => {
  const [_, setStoredValue] = useState("0");

  return (
    <NumberInput onChange={(storedValue) => setStoredValue(storedValue)}>
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  );
};

export default NumericInput;
