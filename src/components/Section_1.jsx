import React from 'react'

function Section_1() {

    const sixNum = [1, 2, 3, 4, 5, 6];
    return (
    <>
        {sixNum.map((number, index) => (
            <div key={index} className={number % 2 === 0 ? 'circle' : 'square'}></div>
        ))}
    </>
  )
}

export default Section_1