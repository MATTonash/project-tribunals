import { Flex, Grid, GridItem } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import TaskItem from "../components/TaskItem";
import Task from "../lib/Task";

import { useState } from "react";
import { Document, Page } from "react-pdf";

import examplePDF from "../assets/example.pdf";

const Annotator = () => {
  const { key } = useParams();

  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  const tasks: Task[] = [
    { name: "Judge's Name", entryType: "label", entryCount: 1, key: "1" },
    { name: "Defendant's Name", entryType: "label", entryCount: 0, key: "1" },
    { name: "Claimant's Name", entryType: "label", entryCount: 0, key: "1" },
    { name: "Reference Number", entryType: "label", entryCount: 1, key: "1" },
    { name: "Accusation", entryType: "text", entryCount: 2, key: "1" },
    { name: "Task Name", entryType: "multi", entryCount: 3, key: "1" },
    { name: "Payout", entryType: "number", entryCount: 1, key: "1" },
  ];

  return (
    <Grid templateColumns="repeat(12, 1fr)" height="calc(100vh - 64px)">
      <GridItem
        as="aside"
        colSpan={{
          "3xl": 2,
          lg: 4,
          base: 6,
        }}
      >
        <Flex flexDirection="column">
          {tasks.map((task, index) => (
            <TaskItem
              task={task}
              key={task.key}
              isAlternate={index % 2 === 1}
            />
          ))}
        </Flex>
      </GridItem>
      <GridItem as="main" colSpan={{ "3xl": 10, lg: 8, base: 6 }}>
        {/* <Document file={examplePDF} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={2} />
        </Document> */}
        <iframe src={examplePDF} width="100%" height="100%" />
      </GridItem>
    </Grid>
  );
};

export default Annotator;
