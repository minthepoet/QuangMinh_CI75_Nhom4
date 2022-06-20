import React from 'react'

function Section(props) {
  return (
    <div className='container'>
        <div className='content'>{props.content}</div>
        <div className='image'></div>
    </div>
  )
}

export default Section