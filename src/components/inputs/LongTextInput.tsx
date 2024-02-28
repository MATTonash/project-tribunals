import { Textarea } from '@chakra-ui/react'
import { useState } from 'react'

interface Props {
  label: string;
}

const LongTextInput = (props : Props) => {
    let [value, setValue] = useState('')

    let handleInputChange = (e) => {
      let inputValue = e.target.value
      setValue(inputValue)
    }
    return (
      <label>
        {props.label}
      <>
        <Textarea
          value={value}
          onChange={handleInputChange}
        />
      </>
      </label>
    )
}

export default LongTextInput