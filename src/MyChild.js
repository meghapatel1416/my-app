import React, { Component } from 'react'
//rcc
export default class MyChild extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.myItem.name}</td><td>{this.props.myItem.email}</td>
        {/* this and props can not change */}
      </tr>
    )
  }
}

