import { Avatar, Button, Flex, Image, Spacer } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import Logo from '../assets/LogoHeader.svg'

const Navbar = () => {
  const buttonStyling = {
    variant: 'link',
    colorScheme: 'stoneGray'
  }

  return (
    <Flex
      borderBottom="1px solid #ededed"
      alignItems="center"
      px={5}
      py={1}
      gap={5}
      height={16}
      fontSize={15}
    >
      <Link to=".">
        <Image src={Logo} w={200}></Image>
      </Link>
      <Spacer />
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
      <Avatar size={'sm'} as={Link} to="profile" />
    </Flex>
  )
}

export default Navbar
