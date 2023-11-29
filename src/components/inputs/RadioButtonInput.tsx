import { Radio, RadioGroup } from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import { useState } from "react";

interface RadioButtonInputProps {
  choices: string[];
}

function RadioButtonInput(RadioButtonInputProps) {
  const choices = RadioButtonInputProps.choices;

  const [value, setValue] = useState("1");

  return (
    <RadioGroup
      onChange={setValue}
      value={value}>
      <Stack direction="row">
        {choices.map((choice) => (
          <Radio value={choice.index}>{choice.option}</Radio>
        ))}
      </Stack>
    </RadioGroup>
  );
}

export default RadioButtonInput;
