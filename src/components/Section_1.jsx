import React from 'react'
import {useCallback, useEffect, useState } from 'react'

function Section_1() {
    const [store, setStore] = useState('')
    // const fetchData = async () =>{
    //     const response = await fetch(`https://fakestoreapi.com/products`);
    //     const data = await response.json();
    //     setStore(data)
    //     console.log(store)
    // }

    const fetchUsers = () => {
      fetch("https://fakestoreapi.com/products")
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