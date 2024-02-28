import { Button } from "@chakra-ui/button";
import { Flex } from "@chakra-ui/layout";
import { AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBin7Line } from "react-icons/ri";

export function SidebarNavigationHeader() {
  return (
    <Flex
      h={16}
      bg={"stoneGray.50"}
      px={4}
      alignItems={"center"}
      justifyContent={"space-between"}
      borderBottom="1px"
      borderBottomColor="stoneGray.200"
    >
      <h2>
        <b>Tasks</b>
      </h2>
      <Flex>
        <Button aria-label={"Add Task"} onClick={() => {}} bg={"none"}>
          <AiOutlinePlus />
        </Button>
        <Button aria-label={"Add Task"} onClick={() => {}} bg={"none"}>
          <RiDeleteBin7Line />
        </Button>
      </Flex>
    </Flex>
  );
}
