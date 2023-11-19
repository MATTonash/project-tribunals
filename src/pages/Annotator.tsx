import { Box, Flex, Grid, GridItem, Spacer, Text } from "@chakra-ui/react";
import TaskItem from "../components/TaskItem";
import Task from "../lib/Task";

import examplePDF from "../assets/example.pdf";
import { Sidebar } from "../components/Sidebar";
// import { PdfLoader } from "react-pdf-highlighter";
// import PdfViewer from "../components/PdfViewer";

interface Props {
  tasks: Task[];
}

const Annotator = (props: Props) => {
  // const { key } = useParams();

  return (
    <Flex>
      <Box flex={1}>
        <Sidebar tasks={props.tasks} />
      </Box>
      <Box flex={2} textAlign="center">
        The PDF
      </Box>
    </Flex>
  );
};

export default Annotator;
