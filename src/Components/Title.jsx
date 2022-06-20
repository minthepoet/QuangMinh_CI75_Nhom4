import React from 'react'

function Title(props) {
  const {text} = props;
  return (
    <div className='text'>
      {text}
    </div>
  )
}

export default Title