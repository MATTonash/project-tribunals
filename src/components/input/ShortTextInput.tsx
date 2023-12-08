import { Input } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  name: string;
  label: string;
}

/**
 * @deprecated Use TaskForm instead
 */
const ShortTextInput = (props: Props) => {
  const [value, setValue] = useState<string>();

  return (
    <label>
      {props.label}
      <Input
        onChange={(event) => setValue(event.target.value)}
        value={value}
        name={props.name}
      />
    </label>
  );
};

export default ShortTextInput;
