import React, { Component } from 'react'

export default class APIDisplayWithClass extends Component {
state={
data: []
}
componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(y=>y.json())
    .then(y=>{
        this.setState({...this.state,data:y});
    })
}

  render() {
    return (
      <div>{this.state.data.map((v)=>{
        return(
            <tr><td>{v.id}</td><td>{v.body}</td></tr>
        )

      })}</div>
    )
  }
}
