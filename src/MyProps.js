import React, { PureComponent } from 'react'
import axios from 'axios'
import MyChild from './MyChild'
//rcp
export default class MyProps extends PureComponent {
    state = {
        data: []
    }

    componentDidMount() {
        axios.get("https://jsonplaceholder.typicode.com/comments")
            .then(y => {
                this.setState({ ...this.state, data: y.data })
            })

    }
    render() {
        return (
            <table>
                <tbody>{
                    this.state.data.map((v) => {
                       return(<MyChild myItem={v} />) 
                    })
                }
                </tbody>
            </table>
        )
    }
}
