import React from 'react'
import {useEffect, useState } from 'react'

function Section_1() {
    const [store, setStore] = useState('')

    const fetchUsers = () => {
      fetch("https://jsonplaceholder.typicode.com/photos")
        .then((response) => response.json())
        .then((data) => setStore(data))
        .catch ((error) => console.error(error));
    };
    useEffect(() => {
      fetchUsers();;
    }, []);
   
    console.log(store)
    
  return (
   <>
   {store && store.map((store, index) => (
    <div className='content-box' key={index}>title: {store.title}</div>
   ))}
   </>
  )
}

export default Section_1;