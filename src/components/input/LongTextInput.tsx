import { Textarea } from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

/**
 * @deprecated Use TaskForm instead
 */
const LongTextInput = () => {
  const [value, setValue] = useState("");

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };
  return (
    <>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder="Long Text Input"
      />
    </>
  );
};

export default LongTextInput;
