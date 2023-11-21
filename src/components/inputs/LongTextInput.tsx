import { Textarea } from '@chakra-ui/react'
import { useState } from 'react'

const LongTextInput = () => {
    let [value, setValue] = useState('')

    let handleInputChange = (e) => {
      let inputValue = e.target.value
      setValue(inputValue)
    }
    return (
      <>
        <Textarea
          value={value}
          onChange={handleInputChange}
          placeholder='Long Text Input'
        />
      </>
    )
}

export default LongTextInput