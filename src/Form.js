import React, { useRef } from 'react'
import useStore from './store';

function Form() {
  const inputRef = useRef(null);
  const addPerson = useStore((state) => state.addPerson);

  const add = () => {
    addPerson(inputRef.current.value);
    inputRef.current.value = ''
  }
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={add}>App person</button>
    </div>
  )
}

export default Form