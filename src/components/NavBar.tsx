import { Avatar, Button, Flex, Image, Spacer } from "@chakra-ui/react";
import Logo from "../assets/LogoHeader.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const buttonStyling = {
    variant: "link",
    colorScheme: "stoneGray",
    fontFamily: "Space Grotesk",
    fontWeight: 700,
    size: "lg",
  };
  return (
    <Flex
      borderBottom="2px solid #D6D6D6"
      alignItems="center"
      px={2}
      py={1}
      gap={5}
      height={16}
    >
      <Image src={Logo} w={200}></Image>
      <Spacer />
      <Button {...buttonStyling} as={Link} to="annotator/1">
        Document Preview
      </Button>
      <Button {...buttonStyling} as={Link} to=".">
        Home
      </Button>
      <Button {...buttonStyling} as={Link} to="task-manager">
        Task Manager
      </Button>
      <Button {...buttonStyling} as={Link} to="help">
        Help
      </Button>
      <Button {...buttonStyling} as={Link} to="settings">
        Settings
      </Button>
      <Avatar
        name="User"
        src="https://imgpile.com/images/GUOnOa.png"
        as={Link}
        to="profile"
      />
    </Flex>
  );
};

export default Navbar;
