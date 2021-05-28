
import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox, message } from 'antd';

import './index.less';
import http from '@/common/utils/http'

function Login() {
	let history = useHistory();

	const [loginstate, setLoginstate] = useState({})

	const loginBind = (e) => {
		e.preventDefault()
		http.PostUrl('users/login', {
			userName: loginstate.userName,
			passWord: loginstate.passWord
		}).then((data) => {
			if (data.success) {
				let result = data.result;
				message.success(data.msg)
				localStorage.setItem('user', JSON.stringify(result.user))
				history.push('/article')
			} else {
				console.log(data.msg)
			}
		})
	}

	const userChange = (e) => {
		console.log(e.target.value)
		setLoginstate({
			...loginstate,
			userName: e.target.value
		})
	}
	const passwordChange = (e) => {
		setLoginstate({
			...loginstate,
			passWord: e.target.value
		})
	}
	const registerBind = () => {
		history.push({ pathname: '/register' })
	}



	return (
		<div className="App">
			<div className="Content">

				<Form
					className='LoginForm'
					name="loginContent"
					initialValues={{ remember: true }}
				>
					<Form.Item
						label="账号"
						name="userName"
						rules={[{ message: '请输入账号!' }]}
					>
						<Input onChange={userChange} />
					</Form.Item>

					<Form.Item
						label="密码"
						name="passWord"
						rules={[{ message: '请输入密码!' }]}
					>
						<Input.Password onChange={passwordChange} />
					</Form.Item>


					<Form.Item  >
						<Button type="primary" onClick={loginBind} htmlType="submit">
							登录
        				</Button>
						<Button type="primary" onClick={registerBind} style={{marginLeft:'20px'}}>
							注册
        				</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
}

export default Login;
