import React, { Component } from 'react'

export default class FormInClass extends Component {
    state = {
        firstName: "",
        lastName:"",
        address:"",
        city: "",
    }

    handler = (e) => {
        this.setState({...this.state,[e.target.name]:e.target.value})

    }

    saveInfo = (e) => {
        e.preventDefault();
        console.log(this.state)
    }
  render() {
    return (
      <form onSubmit={this.saveInfo}>
        {/* this bcz of class component */}
        <input type='text' name='firstName' onChange={this.handler} />
        <input type='text' name='lastName' onChange={this.handler} />
        <input type='text' name='address' onChange={this.handler} />
        <select name='city' onChange={this.handler}>
            <option value='Vadodara'>Vadodara</option>
            <option value='Surat'>Surat</option>
            <option value='Pune'>Pune</option>
        </select>
        <input type='submit' value='save' />
      </form>
    )
  }
}
