import { Flex } from "@chakra-ui/react";
import TaskItem from "../components/TaskItem";
import Task from "../lib/Task";

import PdfViewer from "../components/PdfViewer";

const Annotator = () => {
  // const { key } = useParams();

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
