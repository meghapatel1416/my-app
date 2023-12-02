import React, { useState } from 'react'

export const MultipleState = () => {
    const[data,setData]= useState({firstName:"Megha",lastName:"Patel",fullName:""})

    const fullName = () =>{
        setData({...data,fullName:data.firstName + " " + data.lastName})
    }
  return (
    <div>{data.fullName}
    {data.firstName}
    {data.lastName}
    <button onClick={fullName}>display</button></div>
    
  )
}
