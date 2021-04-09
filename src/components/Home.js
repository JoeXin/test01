import React, { Component } from 'react'
 
export class Home extends Component {
    constructor(props){
        super(props)
        this.state={
            homelink:'组件通信成功'
        }
    }
    onchangelink(){
        this.props.changelink(this.state.homelink)
    }
    render() {
        return (
            <div>
                home
                <button onClick={this.onchangelink.bind(this)}>组件通信</button>
            </div>
        )
    }
}
 

export default  Home
