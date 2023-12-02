import React, { useState } from 'react'

export default function FormFunction() {

   const[data,setData] =useState({
        firstName:"",
        lastName:""
    })

    const saveInfo =(e)=>{
        e.preventDefault();
        console.log(data);

    }
    const handleInput = (e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }

    const handleInputFirstname = (e) => {
        setData({...data,firstName:e.target.value})

    }

    const handleInputLastname = (e) => {
        setData({...data,lastName:e.target.value})
        
    }
  return (
    <form onSubmit={saveInfo}>
        <input type='text' name="firstName" placeholder='please enter firstname' onChange={handleInput}/>
        <input type='text' name="lasttName" placeholder='please enter lastname' onChange={handleInput}/>
        <input type='submit' value="save"/>
    </form>
  )
}
