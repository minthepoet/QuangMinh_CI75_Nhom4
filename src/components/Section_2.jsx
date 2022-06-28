import React from 'react'
import { useState } from 'react'

function Section_2() {
    const [input, setInput] = useState("");
    const [task, setTask] = useState([])
    const handleClick = (e) => {
      e.preventDefault();
      if (input.length <= 0) {
        alert("You have to input your task")
        return;
      }
       
        setTask(prev => [...prev, input])
        setInput("")
       
        
    }
    const handleDone = () => {
      console.log('click done')
    }
    const handleDel = () => {
      console.log(input.this)
    }
  return (
    <>
        <div className='container'>
            <div className='appname'><h1>TO DO</h1></div>
            <form className='todo-form'>
            <input type="text" placeholder="add a todo..." value = {input} onChange = {(e) => setInput(e.target.value)}></input>
            <button type='submit' onClick={handleClick}>Add task</button>
            </form>
            <div className='display'>
              <ul>
                {task.map((input, index) => (
                  <li key={index}>{input} <input className='checkbox' type="checkbox" />  <button onClick={handleDel}>Delete</button>  </li>
                ))}
              </ul>
            </div>
        </div>
    </>
  )
}

export default Section_2