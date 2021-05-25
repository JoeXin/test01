
import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

import './index.less';
import http from '../../common/utils/http'

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
				history.push('/todolist')
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

	return (
		<div className="App">
			<div className="Content">
				<form className="login-form" name="login" >
					<div className="login-content">
						<div>
							<input type="text" autoComplete="off"
								placeholder="用户名" name="userName" required value={loginstate.userName || ''} onChange={userChange} />
						</div>
						<div style={{ marginTop: '16px' }}>
							<input type="password"
								autoComplete="off" placeholder="登录密码" name="passWord" value={loginstate.passWord || ''} onChange={passwordChange} required maxLength="32" />
						</div>
					</div>
					<div style={{ textAlign: "center" }}>
						<button className="login-btn"
							onClick={loginBind}
						>
							22
						</button>
						{/* <input type="submit" className="login-btn"
							onClick={loginBind} value="登录" /> */}
					</div>
					<div className="foor">
						<div className="left"><span>忘记密码 ?</span></div>
						<div className="right"><span>注册账户</span></div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Login;
