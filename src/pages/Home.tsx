import { Container, Flex, Heading, SimpleGrid } from "@chakra-ui/react";
import HomeButtons from "../components/HomeButtons";
import SearchBar from "../components/SearchBar";
import AnnotatedDocument from "../lib/AnnotatedDocument";
import DocumentList from "../components/DocumentList";

const Home = () => {
  const documents: AnnotatedDocument[] = [
    { name: "Daniel v William", caseId: "EA/2023/0813", key: "1" },
    { name: "John v Kara", caseId: "EA/2023/0822", key: "2" },
    { name: "Wendy v Karleen", caseId: "EA/2023/0722", key: "3" },
    { name: "Monash v My Sanity", caseId: "EA/2023/1111", key: "4" },
    { name: "Daniel v Nestle", caseId: "EA/2023/0813", key: "5" },
    { name: "Musk v Australia", caseId: "EA/2023/2123", key: "6" },
    { name: "owo v uwu", caseId: "EA/2023/8999", key: "7" },
    { name: "No Way v That’s Crazy Bro", caseId: "EA/2023/6541", key: "8" },
    { name: "I don’t have v any more names", caseId: "EA/2023/0954", key: "9" },
    { name: "Bob v Bill", caseId: "EA/2023/2121", key: "10" },
  ];

  return (
    <Container
      as="main"
      maxWidth={1000}
      marginTop={300}
      justifyContent="center"
    >
      <Flex flexDirection="column" gap={3}>
        <Heading as="h1" size="2xl">
          Let's start labelling!
        </Heading>
        <Heading as="h2" size="md" fontWeight={500}>
          Select or create a document to start labelling
        </Heading>
        <SimpleGrid columns={2} spacing={15}>
          <HomeButtons />
          <Flex flexDirection="column" gap={1}>
            <SearchBar
              placeholder={"Search your documents"}
              onChange={() => {}}
              onRefresh={() => {}}
            ></SearchBar>
            <DocumentList documents={documents} />
          </Flex>
        </SimpleGrid>
      </Flex>
    </Container>
  );
};

export default Home;
