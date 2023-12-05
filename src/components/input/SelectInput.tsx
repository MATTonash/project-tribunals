import { useState } from "react";
import { Select } from "@chakra-ui/react";

type Option = {
  id: number;
  value: string;
};

export interface Props {
  options: Option[];
  name: string;
  label: string;
}

export function SelectInput(props: Props) {
  const [selectedOption, setSelectedOption] = useState<string>();

  return (
    <label>
      {props.label}
      <Select
        value={selectedOption}
        onChange={(event) => setSelectedOption(event.target.value)}
        name={props.name}
      >
        {props.options.map((option) => (
          <option value={option.value} key={option.id}>
            {option.value}
          </option>
        ))}
      </Select>
    </label>
  );
}
