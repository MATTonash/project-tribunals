import { Flex, Heading, IconButton, Spacer } from "@chakra-ui/react";
import { AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin7Line } from "react-icons/ri";
import { getProgress } from "../lib/get-progress";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

interface TaskFormHeaderProps {
  name: string;
  documentId: string;
}

const TaskFormHeader = ({ name, documentId }: TaskFormHeaderProps) => {
  return (
    <Flex
      h={"36px"}
      gap={2}
      px={4}
      alignItems={"center"}
      borderBottom="1px"
      borderBottomColor="stoneGray.200"
    >
      <Heading as="h2" size="md">
        <b>{name}</b>
      </Heading>
      <Spacer />
      <IconButton
        aria-label="Return to Task List"
        icon={<IoArrowBackCircleOutline />}
        size={"sm"}
        fontSize={"22"}
        variant="ghost"
        as={Link}
        to={`../annotator/${documentId}`}
      />
    </Flex>
  );
};

export default TaskFormHeader;
