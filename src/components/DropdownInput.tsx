import React, { useState } from "react";
import { Select } from "@chakra-ui/react";

interface Props {
  options: string[];
}

export function DropdownInput(props: Props) {
  //   const [selectedOptionIndex, setSelectedOptionIndex] = useState(0);

  return (
    <Select placeholder="Select an option">
      <option value={"Option 1"}>Option 1 Text</option>
      <option value={"Option 2"}>Option 2 Text</option>
      <option value={"Option 3"}>Option 3 Text</option>
      <option value={"Option 4"}>Option 4 Text</option>
    </Select>
  );
}
