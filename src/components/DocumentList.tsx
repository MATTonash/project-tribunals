import { Button, Flex, Spacer, Text } from "@chakra-ui/react";
import AnnotatedDocument from "../lib/AnnotatedDocument";
import { AiOutlineFileText } from "react-icons/ai";

interface Props {
  documents: AnnotatedDocument[];
}

const DocumentList = ({ documents }: Props) => {
  return (
    <>
      <Text fontWeight={600}>Your documents</Text>
      {/* Use a flex and not ButtonGroup as ButtonGroup doesn't take up width of parent */}
      <Flex flexDirection="column">
        {documents.map((document) => (
          <Button
            variant="ghost"
            size="md"
            justifyContent="left"
            key={document.key}
            leftIcon={<AiOutlineFileText />}
          >
            <Text>{document.name}</Text>
            <Spacer />
            <Text fontWeight={400}>{document.caseId}</Text>
          </Button>
        ))}
      </Flex>
    </>
  );
};

export default DocumentList;
