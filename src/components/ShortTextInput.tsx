import { Input } from '@chakra-ui/react'
import { useState } from 'react'

const ShortTextInput = () => {

  const[shortTextString, setShortTextString] = useState('');
  
  const handleChange = (event) => setShortTextString(event.target.shortTextString);

  return (
    <div><Input placeholder='Short Text Input' 
    onChange={handleChange}
    />
    </div>
  )
}

export default ShortTextInput