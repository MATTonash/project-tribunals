import { Button, Flex, Spacer, Text } from "@chakra-ui/react";
import { documentsDb } from "../../../lib/dummy-data/documentsDb";
import { AiOutlineFileText } from "react-icons/ai";
import { Link } from "react-router-dom";

const DocumentList = () => {
  return (
    <>
      <Text fontWeight={600}>Your documents</Text>
      {/* Use a flex and not ButtonGroup as ButtonGroup doesn't take up width of parent */}
      <Flex flexDirection="column">
        {Object.keys(documentsDb).map((documentId) => {
          return (
            <Button
              variant="ghost"
              size="md"
              justifyContent="left"
              key={documentId}
              leftIcon={<AiOutlineFileText />}
              as={Link}
              to={`annotator/${documentId}`}
            >
              <Text>{documentsDb[documentId].name}</Text>
              <Spacer />
              <Text fontWeight={400}>{documentsDb[documentId].name}</Text>
            </Button>
          );
        })}
      </Flex>
    </>
  );
};

export default DocumentList;
