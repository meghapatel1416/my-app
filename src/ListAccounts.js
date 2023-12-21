import axios from 'axios';
import React, { useEffect, useState } from 'react'
// import fetchauth from './axios/customaxios';
import authfetchI from './axios/interseptor';




export default function ListAccounts() {

    const [data,setData]= useState([]);

    let d = JSON.parse(localStorage.getItem("token"));
    // useEffect if data is commimg from API  
    useEffect(()=>{
        // instead of get we can use delete, patch or put   
        // axios.get("https://real-pear-fly-kilt.cyclic.app/accounts",{
        //     headers : {
        //         'Content-Type' : 'application/json',
        //         'Authorization' : `bearer ${d?.jwtToken}`
    
        //     }
        // })
        authfetchI.get("/accounts").then(y=> {
            console.log(y.data)
        }).catch(u=>{
            console.log(u);
        })


    },[])

    return (
        <div>ListAccounts</div>
      )
}