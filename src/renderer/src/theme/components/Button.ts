import { defineStyleConfig } from '@chakra-ui/react'

const Button = defineStyleConfig({
  baseStyle: {
    fontcolor: '#121212'
  },
  sizes: {
    xl: {
      fontSize: 'md',
      py: 4,
      px: 15,
      justifyContent: 'left'
    }
  },
  variants: {
    outline: {
      // border: "2px solid",
      // borderColor: '<color>'
    },
    solid: (props) => ({
      // border: '2px solid',
      bg: `${props.colorScheme}.100`,
      color: `${props.colorScheme}.900`,
      _hover: {
        bg: `${props.colorScheme}.200`
      },
      _active: {
        bg: `${props.colorScheme}.300`
      }
    })
  }
})

export default Button
