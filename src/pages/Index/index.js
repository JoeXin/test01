import './index.less';
import { Button, DatePicker } from 'antd'
import { useHistory } from "react-router-dom";

function App() {
	let history = useHistory();

	return (
		<div className="App">
			<div className="Content" >
				<Button
					style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translateY(-50%)' }}
					onClick={() => {
						history.push('/login')
					}}>
					登录
				</Button>
			</div>
		</div>
	);
}

export default App;
