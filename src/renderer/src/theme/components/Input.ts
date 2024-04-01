import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  inputAnatomy.keys
)

const solid = definePartsStyle((props) => ({
  field: {
    // border: '2px solid',
    _active: {
      borderColor: `${props.colorScheme}.900`
    },
    _focus: {
      borderColor: `${props.colorScheme}.900`
    }
  },
  addon: {
    // border: '2px solid'
  }
}))

const Input = defineMultiStyleConfig({
  variants: { solid }
})

export default Input
