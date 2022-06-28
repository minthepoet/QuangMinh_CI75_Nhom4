import React from 'react'
import { useState } from 'react'

function Section_1() {
    const [inputValue, setInputValue] = useState("")
    console.log(inputValue)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User's input: " + inputValue);
        console.log('User clicked submmit');
        setInputValue("");
        console.log('Clear input');
       
    }
  return (
    <>
    <form>
        <input type = 'text' value = {inputValue} onChange = {(e) => setInputValue(e.target.value)} ></input>
        <button onClick={handleSubmit}>Submit</button>
        </form>
    </>
  )
}

export default Section_1