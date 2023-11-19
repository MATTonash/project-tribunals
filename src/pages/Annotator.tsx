import { Flex, Grid, GridItem, Spacer, Text } from "@chakra-ui/react";
import TaskItem from "../components/TaskItem";
import Task from "../lib/Task";

import examplePDF from "../assets/example.pdf";
// import { PdfLoader } from "react-pdf-highlighter";
// import PdfViewer from "../components/PdfViewer";

const Annotator = () => {
  // const { key } = useParams();
  const tasks: Task[] = [];

  return (
    <Flex height="calc(100vh - 64px)">
      <Flex flexDirection="column" width="30vw" maxWidth="500px">
        {tasks.map((task, index) => (
          <TaskItem task={task} key={task.key} isAlternate={index % 2 === 1} />
        ))}
      </Flex>
    </Flex>
  );
};

export default Annotator;
