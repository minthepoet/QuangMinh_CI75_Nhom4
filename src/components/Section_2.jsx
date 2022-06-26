import React from 'react'
import { useState } from 'react'
function Section_2() {
    const color = 'red';
    const sevenNum = [1, 2, 3, 4 ,5 ,6, 7];
    const [change, setChange] = useState(0);
    const handleChange = () =>{
        setChange ( change == 6 ? 0 : change + 1);
    }
  return (
    <>
    {sevenNum.map((number, index) => (
        <div key={index} className = {`square ${index === change && 'active'}`}></div>
    ))}
    <button onClick={handleChange}>Click me</button>
    </>
  )
}

export default Section_2