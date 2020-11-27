import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import './index.less'
import style from './index.less'

const getUserInfo = (firstName, lastName, country, title, skills) => {
  return `${firstName}${lastName} ,a ${title} develop based in ${country}. he knows ${skills.map((i, k) => i)} `
}
const skills = ['HTML', 'CSS', 'JavaScript']
console.log(getUserInfo('qiao', 'xin', 'China', 'front', skills))

const Numbers = ({ numbers }) => {
  const list = numbers.map((number) => <li>{number}</li>)
  return list
}

const Skills = [
  ['HTML', 10],
  ['CSS', 7],
  ['JavaScript', 10],
  ['React', 10]
]
const Header = () => {
  return (
    <header style={{ 'width': 'auto', 'height': 'auto', 'border': "1px solid red" }}>
      <div className='header-wrapper'>
        <h1>Welcome to 30 Days Of React</h1>
        <h2>Getting Started React</h2>
        <h3>JavaScript Library</h3>
        <p>Asabeneh Yetayeh</p>
        <small>Oct 3, 2020</small>
      </div>
    </header>
  )
}

// const Header = () => (
//   <header  >
//     <div className='header-wrapper'>
//       <h1>Welcome to 30 Days Of React</h1>
//       <h2>Getting Started React</h2>
//       <h3>JavaScript Library</h3>
//       <p>Asabeneh Yetayeh</p>
//       <small>Oct 3, 2020</small>
//     </div>
//   </header>
// )


const UserCard = () => (
  <div className='user-card'>
    <img src="https://web.xibaoxiao.com/Attachments/baoxiao/28/2020/11/26/287f25a29-4eed-4da2-8857-621294f187a0.jpg" alt="" style={{"maxHeight":"100%"  }} />
    <h2>test</h2>
  </div>
)


class One extends Component {
  constructor(props) {
    super(props)
    this.state = {
      numbers: [1, 2, 3, 4, 5]
    }
  }
  componentDidMount() {
    fetch('https://web.xibaoxiao.com/Attachments/baoxiao/28/2020/11/26/287f25a29-4eed-4da2-8857-621294f187a0.jpg')
      .then((response) => {
        if (response.ok) {
          console.log('ok');
        } else {
          console.log('error');
        }
      })
      .catch(() => {
        console.log('error');
      });
  }
  render() {
    return (
      <div className="test">
        <Header />
        <UserCard ></UserCard >
        <ul>
          <Numbers numbers={this.state.numbers} />
          <button>第二章</button>
        </ul>
      </div>
    )
  }
}

// const mapStateToProps = (state) => ({
//   list:state.list
// })

// const mapDispatchToProps = {
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Apple)
export default One

