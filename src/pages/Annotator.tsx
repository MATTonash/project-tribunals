import { Flex, Grid, GridItem, Spacer, Text } from "@chakra-ui/react";
import TaskItem from "../components/TaskItem";
import Task from "../lib/Task";

import examplePDF from "../assets/example.pdf";
import { PdfLoader } from "react-pdf-highlighter";
import PdfViewer from "../components/PdfViewer";

const Annotator = () => {
  // const { key } = useParams();

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
    <Flex height="calc(100vh - 64px)">
      <Flex flexDirection="column" width="30vw" maxWidth="500px">
        {tasks.map((task, index) => (
          <TaskItem task={task} key={task.key} isAlternate={index % 2 === 1} />
        ))}
      </Flex>
      <PdfViewer />
    </Flex>
  );
};

export default Annotator;
