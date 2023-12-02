import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Props } from './Props'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/esm/Row';


export const Ecommerce = () => {

const[data,setData]  = useState([])
console.log(data)

useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then(y=>{
        setData(y.data);
    })


},[])

  return (
   <Container>
    <Row>
   {
    data.map((v)=>{
      return(
       <Props title={v.title} des={v.description} img={v.image}/>
      )
    })
   }
   
   </Row>
   </Container>
  )
}
