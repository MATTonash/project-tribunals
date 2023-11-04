import { InputGroup, Input, IconButton, Flex } from "@chakra-ui/react";
import React from "react";
import { AiOutlineReload } from "react-icons/ai";

interface Props {
  onChange: (value: string) => void;
  onRefresh: (value: string) => void;
  placeholder?: string;
}

const SearchBar = ({ onChange, onRefresh, placeholder }: Props) => {
  const [value, setValue] = React.useState("");
  const handleChange = (value: string) => {
    setValue(value);
    onChange(value);
  };

  return (
    <Flex gap={3}>
      <InputGroup size="sm">
        <Input
          type={"text"}
          placeholder={placeholder}
          value={value}
          variant="solid"
          colorScheme="salmon"
          onChange={(event) => handleChange(event.target.value)}
          borderRadius={6}
        />
      </InputGroup>
      <IconButton
        aria-label="Reload search"
        icon={<AiOutlineReload />}
        size="sm"
        variant="outline"
        onClick={() => onRefresh(value)}
      />
    </Flex>
  );
};

export default SearchBar;
