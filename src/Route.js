import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Todolist from '@pages/Todolist';
import Index from '@pages/Index';
import Login from '@pages/Login';
import Article from '@pages/Article';
import DetailArticle from '@pages/Article/DetailArticle';

const Routes = () => (
	<BrowserRouter>
		<Switch>
			{/* <Router></Router> */}
			<Route exact path="/" component={Index} />
			<Route exact path="/login" component={Login} />
			<Route exact path="/todolist" component={Todolist} />
			<Route exact path="/article" component={Article} />
			<Route exact path="/articledetail" component={DetailArticle} />
			<Redirect exact to="/" />
		</Switch>
	</BrowserRouter>
);

export default Routes