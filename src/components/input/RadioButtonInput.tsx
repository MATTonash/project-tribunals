import { RadioGroup } from "@chakra-ui/react";
import { useState } from "react";

interface RadioButtonInputProps {
  choices: string[];
}

function RadioButtonInput({}: RadioButtonInputProps) {
  const [value, setValue] = useState("1");

  // TODO: Non-functional

  return (
    <RadioGroup onChange={setValue} value={value}>
      {/* <Stack direction="row">
        {choices.map((choice) => (
          <Radio value={choice.index}>{choice.option}</Radio>
        ))}
      </Stack> */}
    </RadioGroup>
  );
}

export default RadioButtonInput;
