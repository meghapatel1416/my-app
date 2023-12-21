import axios from 'axios';
import React, { useState } from 'react'
import ListAccounts from './ListAccounts';
import authfetchI from './axios/interseptor';




export default function Login() {

   const [data,setData] = useState({
    email:"",
    password:"",

    })

    const handleSubmit = (e)=>{

        e.preventDefault();
        // axios.post("https://real-pear-fly-kilt.cyclic.app/accounts/authenticate",data)
        authfetchI.post("accounts/authenticate",data)
        .then(y=>{
            localStorage.setItem("token",JSON.stringify(y.data))
            console.log(y.data);
        }).catch(y=>{
            console.log(y)
        })
        // (div@pt.com-email test@123-PW)



       

    }

    const handleInput = (e)=>{

        setData({...data,[e.target.name]: e.target.value})

    }

  return (
    <>

    <form onSubmit={handleSubmit}>
    
    <input type='text' name="email" value={data.email}  onChange={handleInput}/>
    <input type='text' name='password'  value={data.password}  onChange={handleInput}/>
    <input type='submit' value="save"/>
    </form>
    
    <ListAccounts/>
        </>


  )
}