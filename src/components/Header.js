import React, { Component } from 'react'
 
export class Header extends Component {
    constructor(props){
        super(props)

    }
    render() {
        const {homelink}=this.props
        return (
            <div>
                header {homelink}
            </div>
        )
    }
}

 
export default Header
