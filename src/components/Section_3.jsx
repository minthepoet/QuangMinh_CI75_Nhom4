import React from 'react'
import { useState } from 'react'
function Section_3() {
   
    const [isSquare, setIsSquare] = useState(true);
    const handleChange = () =>{
        setIsSquare(isSquare == false ? true : false)
        console.log(isSquare)
    }
  return (
    <>
    <div className={isSquare == true ? 'square' : 'circle'}></div>
    <button onClick={handleChange}>Click</button>
    </>
  )
}

export default Section_3