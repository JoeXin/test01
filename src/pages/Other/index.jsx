import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { get_user } from '../../store/actions/action'

import Header from '../../components/Header';
import Home from '../../components/Home';

import './index.less'


import { Button } from 'antd'
class Apple extends Component {
  constructor(props) {
    super(props);
    this.onChangeLinkName=this.onChangeLinkName.bind(this)
    this.state={
      homelink:'Header'
    }
  }

  onChangeLinkName(newName){
    this.setState({
      homelink:newName
    })
  }
  render() {
    const { get_user, user } = this.props;
    return (
      <div className="test">
        邮件：{user.email}
        <div>
          <Button onClick={() => get_user()}>22</Button>
          <Header homelink={this.state.homelink}></Header>
          <Home changelink={this.onChangeLinkName.bind(this)}></Home>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state.user);
  console.log(state);
  return {
    user: state.user
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    get_user: () => dispatch(get_user())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Apple)
 
 
