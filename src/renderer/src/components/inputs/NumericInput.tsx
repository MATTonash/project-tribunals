import { useState } from 'react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'


const NumericInput = () => {

  const [storedValue, setStoredValue] = useState('0');

  return (

        <NumberInput 
        onChange = {(storedValue) => setStoredValue(storedValue)} >
          <NumberInputField />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>


   
  )
}

export default NumericInput;