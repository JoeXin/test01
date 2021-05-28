
import React, { useState } from 'react'
import { useHistory } from "react-router-dom";
import { Form, Input, Button, Checkbox ,message} from 'antd';

import './index.less';
import http from '@/common/utils/http'

function Register() {
	let history = useHistory();

	const [loginstate, setLoginstate] = useState({})

	const registerBind = (e) => {
		e.preventDefault()
		http.PostUrl('users/register', {
			userName: loginstate.userName,
			passWord: loginstate.passWord
		}).then((data) => {
			if (data.success) {
				let result=data.result;
				message.success("注册成功")
			} else {
				console.log(data.msg)
				message.info(data.msg)

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
						rules={[{   message: '请输入账号!' }]}
					>
						<Input onChange={userChange} />
					</Form.Item>

					<Form.Item
						label="密码"
						name="passWord"
						rules={[{   message: '请输入密码!' }]}
					>
						<Input.Password onChange={passwordChange} />
					</Form.Item>

				 
					<Form.Item  >
						<Button type="primary" onClick={registerBind}>
							注册
        				</Button>
					</Form.Item>
				</Form>
			</div>
		</div>
	);
}

export default Register;
