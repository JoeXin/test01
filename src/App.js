import React from 'react';
import logo from './logo.svg';
import './App.less';
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom"


const Buttons = ({ color, text }) => {
    return {
        type: 'button',
        props: {
            className: `btn btn-${color}`,
            children: {
                type: 'em',
                props: {
                    children: text,
                },
            },
        },
    }
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            city: ''
        }
    }
    menu = () => {
        return (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                        {this.state.city}
                    </a>
                </Menu.Item>
            </Menu>
        )
    }
    componentDidMount() {
        fetch("http://restapi.amap.com/v3/ip?key=30df856bc26a7ea9406b59bd258de20d").then((res) => {
            if (res.ok) {
                res.text().then((data) => {
                    const detail = JSON.parse(data)
                    this.setState({
                        city: detail.city,
                        adcode: detail.adcode
                    })
                })
            }
        }).catch((res) => {
            console.log(res.status);
        });
    }
    render() {
        return (
            <div className="content">
                <div className="header">
                    <div className="logo">
                        <a className="logosite" href="https://joexin.github.io" title="主页logo">
                            <img src={require('../src/common/img/logoimg.jpeg')} alt="" className="logoimg"></img>
                        </a>
                    </div>
                    <div className="location">
                        <Dropdown overlay={this.menu}>
                            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                {this.state.city} <DownOutlined />
                            </a>
                        </Dropdown>
                    </div>
                    <div className="headernav">
                        <ul className="navbar">
                            <li className="navbar-item">
                                <Link to="/hello" >
                                    首页
                                </Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/hello" >
                                    找医院
                                </Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/hello" >
                                    找医生
                                </Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/hello" >
                                    健康咨询
                                </Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/hello" >
                                    药品商城
                                </Link>
                            </li>

                            <li className="navbar-item">
                                <Link to="/hello" >
                                    关于我们
                                </Link>
                            </li>
                            <li className="navbar-item">
                                <Link to="/hello" >
                                    待提
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="wrap"></div>
            </div>
        )
    }
}


export default App;
