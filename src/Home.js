import React, { useState } from 'react';
import t from './data';

export const Home = () => {

  let [data, setData] = useState(0);
  const inc = () => {

    setData(data + 1);
    console.log(data)
  }

  const minus = () => {

    setData(data - 1);
    console.log(data)
  }

  const multi = () => {
    setData(data * 1);
    console.log(data)
  }



  return (
    <>

      {data}


      <button onClick={inc}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={multi}>*</button>
      <table>

        <tbody>
          {

            t.map((v, index) => {

              return (<tr key={index}>
                <td>{v.userId}</td>
                <td>{v.id}</td>
                <td>{v.body}</td>
                <td>{v.title}</td>

              </tr>)

            })

          }

        </tbody>
      </table>

    </>
  )
}