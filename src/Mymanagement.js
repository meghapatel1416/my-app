import React from 'react'

export const Mymanagement = (data) => {
  return (
    <table>

      {
        // props and component we use for the maximum reusiblity.
        // we can use props instead of data.

        data.multileData.map((v, index) => {

          return (<tr><td>{v.firstName}</td><td>{v.lastName}</td>

            <td><button onClick={() => {
              data.deleteInfo(index)

            }}>Delete</button></td>


            <td><button onClick={() => {
              data.editInfo(index)

            }}>edit</button></td>

          </tr>)

        })

      }
    </table>

  )
}